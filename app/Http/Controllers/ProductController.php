<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index(Request $request)
    {
        $stateFilter = $request->get('state');
        $minPriceFilter = $request->get('min_price');
        $maxPriceFilter = $request->get('max_price');
        $yearFilter = $request->get('year');
        $typeFilter = $request->get('type');
        $products = Product::with([
            'details',
            'images',
            'user',
        ]);
        if ($stateFilter) {
            $products = $products->whereHas('details', function ($query) use ($stateFilter) {
                $query->where('tinh_trang', $stateFilter);
            });
        }
        Log::debug($minPriceFilter);
        Log::debug($maxPriceFilter);

        if ($minPriceFilter && $maxPriceFilter) {
            $products = $products->whereBetween('price', [$minPriceFilter, $maxPriceFilter]);
        } elseif ($minPriceFilter) {
            $products = $products->where('price', '>', $minPriceFilter);
        } elseif ($maxPriceFilter) {
            $products = $products->where('price', '<', $maxPriceFilter);
        }

        if ($yearFilter) {
            $products = $products->whereHas('details', function ($query) use ($yearFilter) {
                $query->whereAlias('nam_san_xuat')->whereValue($yearFilter);
            });
        }

        if ($typeFilter) {
            $products = $products->whereHas('details', function ($query) use ($typeFilter) {
                $query->whereAlias('tinh_trang')->whereValue($typeFilter);
            });
        }

        return $products->paginate();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param $slug
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $product = Product::with([
            'details',
            'images',
            'user',
        ])->whereSlug($slug)->firstOrFail();

        return $product;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
