<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div>
          <router-link class="btn btn-info center" :to="{name:'Home'}">Project List</router-link>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->

     <form @submit.prevent="AddProject">
    <section class="content">
      <div class="container-fluid">
       
        <div class="row">
         
          <!-- left column -->
          <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Create Project</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
            <template v-for="error in errors" :key="index">
            <span  class="text-center text-danger mt-4">{{error[0]}}</span>
             </template>
                <div class="card-body">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" v-model.lazy="formData.name" class="form-control" id="name" placeholder="Enter project name">
                  </div>
                          
                    
                      <!-- textarea -->
                      <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" v-model.lazy = "formData.description" rows="3" placeholder="Enter Project Description"></textarea>
                      </div>
                    

                  <div class="form-check">
                    <input type="checkbox" v-model="formData.status" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Status</label>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
               </div>
             </div>
            <!-- /.card -->

            <!-- Form Element sizes -->

            <!-- /.card -->



            <!-- /.card -->
        
            <!-- /.card -->

          <div class="col-md-6">
          <!-- /.card-header -->
              <div class="card-body">
                <ul class="todo-list" data-widget="todo-list">
                  <li v-for="user in users" :key="user.id">
                    <!-- drag handle -->
                    <span class="handle">
                      <i class="fas fa-ellipsis-v"></i>
                      <i class="fas fa-ellipsis-v"></i>
                    </span>
                    <!-- checkbox -->
                    <div  class="check-primary d-inline ml-2">
                      <input type="checkbox" v-model="formData.users_id" :value="user.id">
                      <label for="todoCheck1"></label>
                    </div>
                    <!-- todo text -->
                    <span class="text">{{user.name}}</span>
                    <!-- Emphasis label -->

                    <!-- General tools such as edit or delete-->

                  </li>
                </ul>
              </div>
         </div>
        
      
        </div>
      </div>
    </section>
    </form>
    <!-- /.content -->
  </div>
</template>
<script>
  export default {
    data()
    {
      return {
        formData: {
          name :'',
          description:'',
          status:false,
          users_id:[]

        },
        errors:{},
        users:[]
      }
    },
    methods:
    {
      AddProject()
      {
         console.log(this.formData.users_id); 
       this.$store.dispatch('AddProject',this.formData)
        .then((response)=>{
        //console.log(response.data)
        this.$router.push({name:'Home'}) 
      })
      .catch((error)=>{
                 this.errors = error.response.data

             
      })

      
      }
    },
   mounted()
   {

         //console.log(this.formData); 
       this.$store.dispatch('getUsers')
        .then((response)=>{
          this.users = response.data.data
       // console.log(response.data.data)
       // this.$router.push({name:'Home'}) 
      })
      .catch((error)=>{
                 this.errors = error.response.data

             
      })

      
      
    }
  }
</script>