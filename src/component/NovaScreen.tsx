"use client"
import { useState, useRef } from "react";
import { Dropdown } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IMAGES } from "@/constant/theme";
import Image from "next/image";

interface NHSLocum {
    id: string;
    name: string;
    specialization: string;
    location: string;
    availability: string[];
    dateSelectionType: 'daily' | 'weekly' | 'monthly' | 'custom';
}

// Mock NHS Locum data
const nhsLocumData: NHSLocum[] = [
    {
        id: "1",
        name: "Dr Sarah Johnson",
        specialization: "General Practice",
        location: "London",
        availability: ["Monday", "Tuesday", "Wednesday"],
        dateSelectionType: "daily"
    },
    {
        id: "2", 
        name: "Dr Michael Brown",
        specialization: "Emergency Medicine",
        location: "Manchester",
        availability: ["Thursday", "Friday", "Saturday"],
        dateSelectionType: "weekly"
    },
    {
        id: "3",
        name: "Dr Emily Davis",
        specialization: "Pediatrics",
        location: "Birmingham",
        availability: ["Monday", "Wednesday", "Friday"],
        dateSelectionType: "monthly"
    },
    {
        id: "4",
        name: "Dr James Wilson",
        specialization: "Cardiology",
        location: "Liverpool",
        availability: ["Tuesday", "Thursday", "Sunday"],
        dateSelectionType: "custom"
    }
];

function NovaScreen() {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [selectedDateSelectionType, setSelectedDateSelectionType] = useState<string>("All Types");
    const [selectedLocation, setSelectedLocation] = useState<string>("All Locations");
    const [selectedSpecialization, setSelectedSpecialization] = useState<string>("All Specializations");
    const [filteredLocums, setFilteredLocums] = useState<NHSLocum[]>(nhsLocumData);

    // Filter function
    const applyFilters = () => {
        let filtered = nhsLocumData;

        // Filter by date selection type
        if (selectedDateSelectionType !== "All Types") {
            filtered = filtered.filter(locum => 
                locum.dateSelectionType === selectedDateSelectionType.toLowerCase()
            );
        }

        // Filter by location
        if (selectedLocation !== "All Locations") {
            filtered = filtered.filter(locum => 
                locum.location === selectedLocation
            );
        }

        // Filter by specialization
        if (selectedSpecialization !== "All Specializations") {
            filtered = filtered.filter(locum => 
                locum.specialization === selectedSpecialization
            );
        }

        setFilteredLocums(filtered);
    };

    // Apply filters when any filter changes
    const handleFilterChange = (filterType: string, value: string) => {
        switch(filterType) {
            case 'dateSelectionType':
                setSelectedDateSelectionType(value);
                break;
            case 'location':
                setSelectedLocation(value);
                break;
            case 'specialization':
                setSelectedSpecialization(value);
                break;
        }
        
        // Apply filters after state update
        setTimeout(applyFilters, 0);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-head style-3 m-b40">
                        <h2 className="title text-primary m-b0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            Nova Screen - <span className="text-secondary">NHS Locum Finder</span>
                        </h2>
                        <p className="m-t10 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            Find and filter NHS locum doctors based on your requirements
                        </p>
                    </div>
                </div>
            </div>

            {/* Filter Section */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="filter-wrapper bg-light p-4 rounded">
                        <h4 className="mb-3">Filter Options</h4>
                        <div className="row g-3">
                            {/* Date Selection Type Filter */}
                            <div className="col-xl-3 col-md-6">
                                <label className="form-label">Date Selection Type</label>
                                <Dropdown className="w-100">
                                    <Dropdown.Toggle 
                                        variant="outline-primary" 
                                        className="w-100 text-start d-flex justify-content-between align-items-center"
                                    >
                                        {selectedDateSelectionType}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="w-100">
                                        <Dropdown.Item onClick={() => handleFilterChange('dateSelectionType', 'All Types')}>
                                            All Types
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('dateSelectionType', 'Daily')}>
                                            Daily
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('dateSelectionType', 'Weekly')}>
                                            Weekly
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('dateSelectionType', 'Monthly')}>
                                            Monthly
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('dateSelectionType', 'Custom')}>
                                            Custom
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            {/* Location Filter */}
                            <div className="col-xl-3 col-md-6">
                                <label className="form-label">Location</label>
                                <Dropdown className="w-100">
                                    <Dropdown.Toggle 
                                        variant="outline-primary" 
                                        className="w-100 text-start d-flex justify-content-between align-items-center"
                                    >
                                        {selectedLocation}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="w-100">
                                        <Dropdown.Item onClick={() => handleFilterChange('location', 'All Locations')}>
                                            All Locations
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('location', 'London')}>
                                            London
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('location', 'Manchester')}>
                                            Manchester
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('location', 'Birmingham')}>
                                            Birmingham
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('location', 'Liverpool')}>
                                            Liverpool
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            {/* Specialization Filter */}
                            <div className="col-xl-3 col-md-6">
                                <label className="form-label">Specialization</label>
                                <Dropdown className="w-100">
                                    <Dropdown.Toggle 
                                        variant="outline-primary" 
                                        className="w-100 text-start d-flex justify-content-between align-items-center"
                                    >
                                        {selectedSpecialization}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="w-100">
                                        <Dropdown.Item onClick={() => handleFilterChange('specialization', 'All Specializations')}>
                                            All Specializations
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('specialization', 'General Practice')}>
                                            General Practice
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('specialization', 'Emergency Medicine')}>
                                            Emergency Medicine
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('specialization', 'Pediatrics')}>
                                            Pediatrics
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleFilterChange('specialization', 'Cardiology')}>
                                            Cardiology
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            {/* Date Range Picker */}
                            <div className="col-xl-3 col-md-6">
                                <label className="form-label">Date Range</label>
                                <div className="d-flex gap-2">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date: Date | null) => {
                                            if (date) setStartDate(date);
                                        }}
                                        className="form-control"
                                        placeholderText="Start Date"
                                        dateFormat="dd/MM/yyyy"
                                    />
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date: Date | null) => {
                                            if (date) setEndDate(date);
                                        }}
                                        className="form-control"
                                        placeholderText="End Date"
                                        dateFormat="dd/MM/yyyy"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12">
                                <button 
                                    className="btn btn-primary me-2"
                                    onClick={applyFilters}
                                >
                                    Apply Filters
                                </button>
                                <button 
                                    className="btn btn-outline-secondary"
                                    onClick={() => {
                                        setSelectedDateSelectionType("All Types");
                                        setSelectedLocation("All Locations");
                                        setSelectedSpecialization("All Specializations");
                                        setFilteredLocums(nhsLocumData);
                                    }}
                                >
                                    Clear Filters
                                </button>
                                <span className="ms-3 text-muted">
                                    Showing {filteredLocums.length} of {nhsLocumData.length} NHS Locums
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            <div className="row">
                <div className="col-12">
                    <h4 className="mb-3">Available NHS Locums</h4>
                    {filteredLocums.length === 0 ? (
                        <div className="text-center py-5">
                            <p className="text-muted">No NHS locums found matching your criteria. Please adjust your filters.</p>
                        </div>
                    ) : (
                        <div className="row">
                            {filteredLocums.map((locum: NHSLocum) => (
                                <div key={locum.id} className="col-lg-6 col-xl-4 mb-4">
                                    <div className="card h-100 shadow-sm">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="avatar-circle bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: '50px', height: '50px'}}>
                                                    {locum.name.split(' ').map((n: string) => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <h5 className="card-title mb-1">{locum.name}</h5>
                                                    <p className="text-muted small mb-0">{locum.specialization}</p>
                                                </div>
                                            </div>
                                            
                                            <div className="mb-3">
                                                <p className="mb-1">
                                                    <i className="feather icon-map-pin me-2 text-primary"></i>
                                                    <strong>Location:</strong> {locum.location}
                                                </p>
                                                <p className="mb-1">
                                                    <i className="feather icon-calendar me-2 text-primary"></i>
                                                    <strong>Date Type:</strong> 
                                                    <span className={`badge ms-2 ${
                                                        locum.dateSelectionType === 'daily' ? 'bg-success' :
                                                        locum.dateSelectionType === 'weekly' ? 'bg-info' :
                                                        locum.dateSelectionType === 'monthly' ? 'bg-warning' :
                                                        'bg-secondary'
                                                    }`}>
                                                        {locum.dateSelectionType.charAt(0).toUpperCase() + locum.dateSelectionType.slice(1)}
                                                    </span>
                                                </p>
                                                <p className="mb-2">
                                                    <i className="feather icon-clock me-2 text-primary"></i>
                                                    <strong>Available:</strong> {locum.availability.join(', ')}
                                                </p>
                                            </div>

                                            <div className="d-flex gap-2">
                                                <button className="btn btn-primary btn-sm flex-fill">
                                                    <i className="feather icon-calendar me-1"></i>
                                                    Book Appointment
                                                </button>
                                                <button className="btn btn-outline-secondary btn-sm">
                                                    <i className="feather icon-info"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NovaScreen;