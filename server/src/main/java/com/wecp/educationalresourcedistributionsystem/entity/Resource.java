package com.wecp.educationalresourcedistributionsystem.entity;


import java.util.List;

import javax.persistence.*;
@Entity
@Table(name = "resource_allocation") // do not change table name
public class Resource {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
private String name;
private String description;
private String materials;
private List<Resource> resourceAllocations;


// adding my code ramya
 
}

