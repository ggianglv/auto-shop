<?php

use App\Product;
use App\ProductDetail;
use App\ProductImage;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use PHPHtmlParser\Dom;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dom = new Dom();
        for ($j = 1; $j < 10; $j++) {
            $url = 'https://choxe.net/xe?page=' . $j;
            $dom->loadFromUrl($url);
            $news = $dom->find('.row .news');
            $now = Carbon::now();
            foreach ($news as $n) {
                $name = $n->find('.tit-news h2')->text;
                $url = $n->find('.tit-news')->href;
                $detailDom = $dom->loadFromUrl($url);
                $description = (string)$detailDom->find('.mo-ta .mt10')->text;
                $price = $this->priceConvert($detailDom->find('.txt-gia')->text);
                $productExist = Product::whereName($name)->first();
                if ($productExist) {
                    continue;
                }
                $product = Product::firstOrCreate([
                    'name' => $name,
                    'description' => $description,
                    'price' => $price,
                    'user_id' => 1,
                    'category_id' => 1,
                ]);
                $carDetailsDom = $detailDom->find('.detail-xe');
                $details = [];
                foreach ($carDetailsDom as $d) {
                    $value = $d->find('b')->text;
                    $i = $d->find('i')[0];
                    $b = $d->find('b')[0];
                    $i->delete();
                    $b->delete();
                    unset($i);
                    unset($b);
                    $key = substr(trim($d->text), 0, -1);

                    $details[] = [
                        'product_id' => $product->id,
                        'alias' => str_slug($key, '_'),
                        'key' => $key,
                        'value' => trim($value),
                        'created_at' => $now,
                        'updated_at' => $now,
                    ];
                }

                ProductDetail::insert($details);
                //get image
                $imagesDom = $detailDom->find('#slider-big-gallery .item-slider');
                $images = [];
                foreach ($imagesDom as $image) {
                    $src = $image->find('img')->src;
                    $imageUrl = 'https://choxe.net' . $src;
                    $images[] = [
                        'product_id' => $product->id,
                        'image' => $imageUrl,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ];
                }
                ProductImage::insert($images);
            }
        }
    }

    public function priceConvert($priceString)
    {
        $priceArray = explode(' ', $priceString);
        if (strtolower($priceArray[1]) === 'tỷ') {
            return $priceArray[0] * 1000;
        }

        if (strtolower($priceArray[1]) === 'triệu') {
            return $priceArray[0];
        }

        return 0;
    }
}
