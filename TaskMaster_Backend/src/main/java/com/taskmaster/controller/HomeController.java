package com.taskmaster.controller;

import com.taskmaster.entity.Tasks;
import com.taskmaster.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/taskmaster")
@CrossOrigin(origins = "http://localhost:5173")
public class HomeController {

    @Autowired
    private TaskService taskService;
    
    @GetMapping("/")
    public ResponseEntity<List<Tasks>> goToHome(){
        List<Tasks> tasksList = taskService.getAllTasks();
        if(tasksList.isEmpty()){
            return ResponseEntity.notFound().build();
        }else {
            return ResponseEntity.ok(tasksList);
        }
    }

    @GetMapping("/getTask/{taskId}")
    public ResponseEntity<Tasks> getTask(@PathVariable int taskId){
        Tasks gotTask = taskService.getTasks(taskId);
        if(gotTask == null){
            return ResponseEntity.notFound().build();
        }
        else {
            return ResponseEntity.ok(gotTask);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Tasks> addTask(@RequestBody Tasks task){
        Tasks savedTask = taskService.saveTask(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTask);
    }

    @PutMapping("/update/{taskId}")
    public void updateTask(@PathVariable int taskId, @RequestBody Tasks task){
        boolean updated = taskService.updateTask(taskId, task);
        if(updated){
            System.out.println("Task Updated");
        }else {
            System.out.println("Task Not Updated");
        }

    }

    @DeleteMapping("/delete/{taskId}")
    public void deleteTask(@PathVariable int taskId){
        boolean deleted = taskService.deleteTask(taskId);
        if(deleted){
            System.out.println("Task Deleted!");
        }else {
            System.out.println("Task not found");
        }


    }
}
