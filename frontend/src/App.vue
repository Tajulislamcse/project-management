<template>
  <div>
    <div class="wrapper">

  <!-- Navbar -->
    <nav-bar> </nav-bar>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
   <side-bar> </side-bar>
  <!-- Content Wrapper. Contains page content -->
   <router-view></router-view>
  
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.0.1
    </div>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->
  </div>
<!-- <router-view/> -->
</template>
<script>
 import NavBar from "./components/NavBar";
 import SideBar from "./components/SideBar";
  export default {
    components : {
      NavBar,
      SideBar
    }
  }
</script>


