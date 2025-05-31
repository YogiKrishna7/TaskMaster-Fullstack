package com.taskmaster.service;

import com.taskmaster.entity.Tasks;
import com.taskmaster.repo.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepo taskRepo;

    public List<Tasks> getAllTasks(){
        return taskRepo.findAll();
    }

    public Tasks getTasks(int taskId){
        return taskRepo.findById(taskId).orElse(null);
    }

    public Tasks saveTask(Tasks task){
        return taskRepo.save(task);
    }

    public boolean deleteTask(int taskId){
        if(taskRepo.existsById(taskId)){
            taskRepo.deleteById(taskId);
            return true;
        }
        return false;
    }

    public boolean updateTask(int taskId, Tasks task){
        if(taskId == task.getId()){
            taskRepo.save(task);
            return true;
        }
        return false;
    }
}
