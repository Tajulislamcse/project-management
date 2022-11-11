<template>
  <div>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Dashboard</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard v1</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">

        <!-- /.row -->
        <!-- Main row -->
        <div class="row">
          <!-- Left col -->
          <section class="col-12 connectedSortable">
            <!-- Custom tabs (Charts with tabs)-->

            <!-- /.card -->


            <!--/.direct-chat -->

            <!-- TO DO List -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  <i class="ion ion-clipboard mr-1"></i>
                  To Do List
                </h3>

                <div class="card-tools">
                  <ul class="pagination pagination-sm">
                    <li class="page-item"><a href="#" class="page-link">&laquo;</a></li>
                    <li class="page-item"><a href="#" class="page-link">1</a></li>
                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                    <li class="page-item"><a href="#" class="page-link">3</a></li>
                    <li class="page-item"><a href="#" class="page-link">&raquo;</a></li>
                  </ul>
                </div>
              </div>
              <!-- /.card-header -->
            <div class="card-body">
              <table id="myTable" class="table table-bordered table-hover">
                <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
                </thead>
                <tbody>

               </tbody>
    
              </table>
            </div>
              <!-- /.card-body -->
              <div class="card-footer clearfix">
                <router-link :to="{name:'add-project'}" class="btn btn-info float-right"><i class="fas fa-plus"></i> Add item</router-link>
              </div>
            </div>
            <!-- /.card -->
          </section>
          <!-- /.Left col -->
          <!-- right col (We are only adding the ID to make the widgets sortable)-->

          <!-- right col -->
        </div>
        <!-- /.row (main row) -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</div>
</template>
<script>
import axios from "axios";
import $ from "jquery";
export default {
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {

       this.$store.dispatch('getProjects')
          .then((response)=>{        //  console.log(response.data)
          $("#myTable").DataTable({
            //dom: "Bfrtip",
           // buttons: ["colvis", "excel", "print", "csv"],
            data: response.data.data,
            columns: [
              { data: "id" },
              { data: "name" },
              { data: "description" },
              { data: "status" },
            ],
          });
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
