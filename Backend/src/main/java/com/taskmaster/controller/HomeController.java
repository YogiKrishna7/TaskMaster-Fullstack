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
@CrossOrigin(origins = "*")
public class HomeController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/")
    public ResponseEntity<List<Tasks>> goToHome() {
        List<Tasks> tasksList = taskService.getAllTasks();
        if (tasksList.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(tasksList);
        }
    }

    // Not using for now
    @GetMapping("/getTask/{taskId}")
    public ResponseEntity<Tasks> getTask(@PathVariable int taskId) {
        Tasks gotTask = taskService.getTasks(taskId);
        if (gotTask == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(gotTask);
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Tasks> addTask(@RequestBody Tasks task) {
        Tasks savedTask = taskService.saveTask(task);
        if (savedTask != null) {
            System.out.println("Task saved successfully");
        } else {
            System.out.println("Failed to save task.");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(savedTask);
    }

    @PutMapping("/update/{taskId}")
    public ResponseEntity<Tasks> updateTask(@PathVariable int taskId, @RequestBody Tasks task) {
        boolean updated = taskService.updateTask(taskId, task);
        if (updated) {
            Tasks updatedTask = taskService.getTasks(taskId);
            return ResponseEntity.ok(updatedTask);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/delete/{taskId}")
    public ResponseEntity<Void> deleteTask(@PathVariable int taskId) {
        boolean deleted = taskService.deleteTask(taskId);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

}
