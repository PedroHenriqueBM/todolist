<template>

<v-dialog
      v-model="dialog"
      max-width="480"
      
    >

     
      <v-card class="body-dialog">

          <h3 class="title-dialog" >
         
              {{ getTitle() }}
          </h3>

         <v-form v-model="valid">
    <v-container>
      <v-row>

        <v-col
          cols="25"
          md="12"
        >
          <v-text-field
            v-model="taskOperation.id"
            :counter="36"
            label="ID"
            :disabled="isNotEditable('id')"
            v-if="taskOperation.operation!=='create'"
          ></v-text-field>
        </v-col>

         
        <v-col
          cols="25"
          md="12"
        >
          <v-text-field
            v-model="taskOperation.title"
            :counter="100"
            label="Title"
            :required="taskOperation.operation==='create'"
            :disabled="isNotEditable()"
            maxlength="100"
         
          ></v-text-field>
        </v-col>

        <v-col
          cols="25"
          md="12"
        >
          <v-text-field
            v-model="taskOperation.description"
            :counter="200"
            label="Description"
            :disabled="isNotEditable()"
            maxlength="200"
          
          ></v-text-field>
        </v-col>

        <v-col
          cols="25"
          md="12"
        >
          <v-text-field
            v-model="taskOperation.deadLine"
            :counter="10"
            label="Deadline"
            :disabled="isNotEditable()"
            maxlength="10"
          ></v-text-field>
        </v-col>

         <v-col
          cols="25"
          md="12"
        >

        <v-select
          v-model="taskOperation.status"
          label="Select"
         :disabled="isNotEditable()"
         v-if="taskOperation.operation!=='create'"
          :items="['PENDING','COMPLETED']"
        ></v-select>

  
        </v-col>

        <v-col
          cols="25"
          md="12"
        >
          <v-text-field
            v-model="taskOperation.createdAt"
            :counter="10"
            label="Updated"
            required
            :disabled="isNotEditable('createdAt')"
            maxlength="10"
            v-if="taskOperation.operation!=='create'"
          ></v-text-field>
        </v-col>
        
         <v-col
          cols="25"
          md="12"
        >
          <v-text-field
            v-model="taskOperation.updatedAt"
            :counter="10"
            label="Updated"
            required
            :disabled="isNotEditable('updatedAt')"
             maxlength="10"
             v-if="taskOperation.operation!=='create'"
          ></v-text-field>

        </v-col>

        
      </v-row>
    </v-container>
  </v-form>

        
        <v-card-actions>

         

          <v-btn
            v-if="taskOperation.operation==='delete' || taskOperation.operation==='update'"
            :text="taskOperation.operation"
            variant="tonal"
            :color="taskOperation.operation==='delete'?'red':'yellow'"
            @click="close(false)"
          ></v-btn>
          
 
          
          <v-btn
            v-if="taskOperation.operation==='create'"
            :text="taskOperation.operation"
            variant="tonal"
            color="green"
            @click="close(false)"
          ></v-btn>


       
          <v-btn
            :text="taskOperation.operation!=='view'?'Cancel':'Back'"
            variant="tonal"
            color="blue"
            @click="close(true)"
          ></v-btn>

          

        </v-card-actions>
      </v-card>
    </v-dialog>
   
  <div class="tasks-page">
        
  <v-btn @click="showModal(item,'create')" size="default" color="black">Create new task</v-btn>
  <v-table class="box-table" striped="even">
    <thead class="header-table">
      <tr>
        <th class="text-left">
          Title
        </th>
        <th class="text-left">
          DeadLine
        </th>
        <th class="text-left">
          Status
        </th>
        <th class="text-left">
          Created
        </th>
        <th class="text-left">
          Updated
        </th>
        <th class="text-left">
          Delete
        </th>
        <th class="text-left">
          View
        </th>
        <th class="text-left">
          Update
        </th>

      </tr>
    </thead>
    <tbody class="body-table">
      <tr
        v-for="item in tasks"
        :key="item.id"
      >
        <td>{{ item.title }}</td>
        <td>{{ formatDate(item.deadLine) }}</td>
        <td>{{ item.status }}</td>
        <td>{{ formatDate(item.createdAt) }}</td>
        <td>{{ formatDate(item.updatedAt)}}</td>
        <td><v-btn @click="showModal(item,'delete')" size="x-small" color="red">Delete</v-btn></td>
        <td><v-btn @click="showModal(item,'view')" size="x-small" color="blue">View</v-btn></td>
        <td><v-btn @click="showModal(item,'update')" size="x-small" color="yellow">Update</v-btn></td>

      </tr>
    </tbody>
  </v-table>

  <div class="box-pagination">
    <v-pagination 
     rounded="circle"
    v-model="page" 
    :length="numberOfPages" 
     :total-visible="2"></v-pagination>
    <v-select
    v-model="itensPerPage"
    :items="[10,20,30]"
    :hint="`itens(${numberOftasks} per page)`"
    persistent-hint

    ></v-select>
  </div>

       

    </div>


</template>

<script setup>
  import { ref, watch, reactive, shallowRef } from 'vue'
import { taskController } from '../../../domain/TaskModule/TaskController';



const numberOftasks = ref(0);
const numberOfPages = ref(3);
const page = ref(1)
const itensPerPage = ref(10)

const taskOperation = ref({
  id: "",
  title: "",
  description: "",
  deadLine: "",
  updatedAt: "",
  createdAt: "",
  operation: "",
  status:"PENDING"
})

const taskPrev = ref({
  id: "",
  title: "",
  description: "",
  deadLine: "",
  updatedAt: "",
  createdAt: "",
  operation: "",
  status:""
})

const dialog = shallowRef(false)


const tasks = ref([]);

function formatDate(date) {


  return date;
  
}

function getTitle(){


  
        let title = ''
        if ((taskOperation.value.operation === 'view' || taskOperation.value.operation === 'update')) {
          title=taskOperation.value.operation.toUpperCase();
        } else if((taskOperation.value.operation === 'delete')) {
          title='Do you want to continue?'
        }
        return title;
   
}

function isNotEditable(field) {

  let result = true;

  if ((taskOperation.value.operation === 'view' || taskOperation.value.operation === 'delete')) {

     {
      result = true;
    }
    
  } else if ((taskOperation.value.operation === 'update')) {

     if (field === "id" || field==="createdAt" || field==="updatedAt") {
      result = true
     } else {
      result=false
    }
      
  } else if ((taskOperation.value.operation === "create")) {
      result = false;
  }
  return result;
}

async function showModal(item, operation) {
  if (operation === "create") {
    
    taskOperation.value.operation = operation;
  } else {
    taskPrev.value = { ...item, operation: operation };
    taskOperation.value = { ...item, operation: operation }; 
  }
  dialog.value = true;
}
async function close(back) {

  try {

    if (taskOperation.value.operation === "delete") {

      if (!back) {
          await deleteTask();
      }
      
    } else if (taskOperation.value.operation === "update") {

      if (!back) {
          await updateTask();
      }
      
    } else if (taskOperation.value.operation === "create") {

       if (!back) {
          await createTask();
      }
      
    }
    
  } catch (err) {
    
  } finally{
    dialog.value = false;
      taskPrev.value = {
         id: "",
         title: "",
         description: "",
         deadLine: "",
         updatedAt: "",
         createdAt: "",
         operation: "",
         status: "PENDING"
    }
    taskOperation.value = {
         id: "",
         title: "",
         description: "",
         deadLine: "",
         updatedAt: "",
         createdAt: "",
         operation: "",
         status: "PENDING"
    }
  }
  

  
}

async function fetchTasks() {
  try {
    const response = await taskController.readAllTasks({limit: itensPerPage.value, offset: page.value});

    
    tasks.value = response.data.task.task;
    numberOftasks.value = response.data.task.all;
    numberOfPages.value = Math.ceil(response.data.task.all / itensPerPage.value);
    
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
}

async function deleteTask() {
  try {
    const response = await taskController.deleteTask({id: taskOperation.value.id});
    await fetchTasks();
    
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
}

async function createTask() {

  const body = {
      title: (taskOperation.value?.title?.trim().length > 0)  ? taskOperation.value.title : undefined,
      deadLine: (taskOperation.value?.deadLine?.trim().length > 0 ) ? taskOperation.value.deadLine : undefined,
      description: (taskOperation.value?.description?.trim().length > 0 ) ? taskOperation.value.description : undefined,
      status: (taskOperation.value?.status?.trim().length > 0 )? taskOperation.value.status : undefined,
    }

    const response = await taskController.createTask(body)
      .then((value) => {
      
    })
      .catch((err) => {
     
    });
    await fetchTasks();
}

async function updateTask() {
  try {

    const body = {
      id: taskOperation.value.id,
      title: (taskOperation.value?.title?.trim().length > 0 && taskOperation.value.title!==taskPrev.value.title)  ? taskOperation.value.title : undefined,
      deadLine: (taskOperation.value?.deadLine?.trim().length > 0 && taskOperation.value.deadLine!==taskPrev.value.deadLine) ? taskOperation.value.deadLine : undefined,
      description: (taskOperation.value?.description?.trim().length > 0 && taskOperation.value.description!==taskPrev.value.description) ? taskOperation.value.description : undefined,
      status: (taskOperation.value?.status?.trim().length > 0 && taskOperation.value.status!==taskPrev.value.status)? taskOperation.value.status : undefined,
    }


    const response = await taskController.updateTask(body)
      .then((value) => {
    
    })
      .catch((err) => {
   
    });
    await fetchTasks();
    
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
}



fetchTasks();

watch([page, itensPerPage], () => {
  fetchTasks();
});

</script>

<style scoped>
    @import url("./Task.css");
</style>