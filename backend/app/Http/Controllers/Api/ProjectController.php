<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ProjectRequest;
use DB;


class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = DB::table('projects')->get();
        return response(['data'=>$projects],200);
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProjectRequest $request)
    {
        $data = [];
        $data = [
            'name'=>$request->name,
            'description'=>$request->description,
            'member_id'=> $request->members,
            'status' => $request->status
        ];
        DB::table('projects')->insert($data);
        $project = DB::table('projects')->orderBy('id','desc')->first();
        return response()->json(['data'=>$project,'message'=>'Project has been created'],200);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $data = [];
        $data = [
            'name'=>$request->name,
            'description'=>$request->description,
            'member_id'=> $request->members,
            'status' => $request->status
        ];
        DB::table('projects')->where('id',$id)->update($data);
        $project = DB::table('projects')->where('id',$id)->first();
        return response()->json(['data'=> $project,'message'=>'Project has been updated'],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('projects')->where('id',$id)->delete();
        return response()->json(['message'=>'Project has been Deleted'],200);

    }
}
