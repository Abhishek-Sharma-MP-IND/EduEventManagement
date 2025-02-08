package com.wecp.educationalresourcedistributionsystem.entity;


import javax.persistence.*;

@Table(name = "registrations") // do not change table name
@Entity
public class EventRegistration {

   // implement entity

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String status;
    private Long studentId;

// adding my code sravani

}