// components/Dashboard.tsx
'use client';

import React, { useState } from 'react';
import { 
  Cloud,
  Download,
  AlertCircle,
  CheckCircle2,
  Package,
  RefreshCw,
  Users,
  School,
  Monitor,
  Cpu
} from 'lucide-react';

// Import your shadcn components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Type definitions
interface Software {
  id: number;
  name: string;
  currentVersion: string;
  latestVersion: string;
  status: 'update-available' | 'beta-available' | 'up-to-date';
  category: string;
  lastUpdated: string;
  icon: string;
  activeUsers: number;
}

interface LabPackage {
  name: string;
  software: string[];
}

interface LabTypes {
  [key: string]: LabPackage;
}

const Dashboard = () => {
  const [selectedLabType, setSelectedLabType] = useState<string | null>(null);

  // Analytics data
  const analytics = {
    activeUsers: 2458,
    enrolledColleges: 125,
    totalLabs: 345,
    systemsOnline: 2890
  };

  // Lab types configuration
  const labTypes: LabTypes = {
    'BCA': {
      name: 'BCA Lab Package',
      software: ['Programming IDE Bundle', 'Web Development Suite', 'Database Management Tools']
    },
    'BSc': {
      name: 'B.Sc Computer Science Lab Package',
      software: ['Scientific Computing Tools', 'Data Analysis Suite', 'Network Simulation Tools']
    },
    'MCA': {
      name: 'MCA Advanced Lab Package',
      software: ['Advanced Development IDE', 'Cloud Computing Tools', 'AI/ML Development Kit']
    },
    'MTech': {
      name: 'M.Tech Specialized Lab Package',
      software: ['Research Computing Suite', 'High-Performance Computing Tools', 'Advanced System Design Tools']
    }
  };

  // Software data
  const installedSoftware: Software[] = [
    {
      id: 1,
      name: "Mathematics Learning Suite",
      currentVersion: "2.1.0",
      latestVersion: "2.2.0",
      status: "update-available",
      category: "Mathematics",
      lastUpdated: "2024-01-15",
      icon: "📐",
      activeUsers: 1243
    },
    {
      id: 2,
      name: "Science Lab Simulator",
      currentVersion: "3.0.0",
      latestVersion: "3.1.0-beta",
      status: "beta-available",
      category: "Science",
      lastUpdated: "2024-01-20",
      icon: "🧪",
      activeUsers: 892
    },
    {
      id: 3,
      name: "Programming IDE Bundle",
      currentVersion: "1.5.0",
      latestVersion: "1.5.0",
      status: "up-to-date",
      category: "Development",
      lastUpdated: "2024-01-25",
      icon: "💻",
      activeUsers: 1567
    },
    {
      id: 4,
      name: "Digital Art Studio",
      currentVersion: "4.2.1",
      latestVersion: "4.2.1",
      status: "up-to-date",
      category: "Arts",
      lastUpdated: "2024-01-28",
      icon: "🎨",
      activeUsers: 654
    }
  ];

  const getStatusBadge = (status: Software['status']) => {
    switch (status) {
      case 'update-available':
        return (
          <Badge className="bg-blue-500 hover:bg-blue-600">
            <RefreshCw className="w-3 h-3 mr-1" />
            Update Available
          </Badge>
        );
      case 'beta-available':
        return (
          <Badge className="bg-purple-500 hover:bg-purple-600">
            <AlertCircle className="w-3 h-3 mr-1" />
            Beta Available
          </Badge>
        );
      case 'up-to-date':
        return (
          <Badge className="bg-green-500 hover:bg-green-600">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Up to Date
          </Badge>
        );
    }
  };

  return (
    
    <div className="p-6 space-y-6">
      {/* Dashboard Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500 mt-1">Educational Software Management System</p>
        </div>
        <div className="flex gap-4">
          <Button className="flex items-center gap-2">
            <Cloud className="w-4 h-4" />
            Check for Updates
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Package className="w-4 h-4" />
            Manage Packages
          </Button>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Active Users</p>
                <p className="text-2xl font-bold">{analytics.activeUsers}</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Enrolled Colleges</p>
                <p className="text-2xl font-bold">{analytics.enrolledColleges}</p>
              </div>
              <School className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Labs</p>
                <p className="text-2xl font-bold">{analytics.totalLabs}</p>
              </div>
              <Monitor className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Systems Online</p>
                <p className="text-2xl font-bold">{analytics.systemsOnline}</p>
              </div>
              <Cpu className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lab Packages Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>All-in-One Lab Packages</CardTitle>
          <CardDescription>Select your course to view recommended software packages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Select onValueChange={setSelectedLabType}>
              <SelectTrigger className="w-full md:w-[300px]">
                <SelectValue placeholder="Select Course Type" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(labTypes).map((type) => (
                  <SelectItem key={type} value={type}>
                    {labTypes[type].name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {selectedLabType && (
              <div className="mt-4 space-y-4">
                <h3 className="font-medium">Included Software:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {labTypes[selectedLabType].software.map((software, index) => (
                    <Card key={index}>
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4" />
                          <span>{software}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button className="mt-4">Install Complete Package</Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Installed Software Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {installedSoftware.map((software) => (
          <Card key={software.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{software.icon}</span>
                  <div>
                    <CardTitle className="text-xl">{software.name}</CardTitle>
                    <CardDescription>{software.category}</CardDescription>
                  </div>
                </div>
                {getStatusBadge(software.status)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Current Version</span>
                  <span className="font-medium">{software.currentVersion}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Latest Version</span>
                  <span className="font-medium">{software.latestVersion}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Active Users</span>
                  <span className="font-medium">{software.activeUsers}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Last Updated</span>
                  <span className="font-medium">{new Date(software.lastUpdated).toLocaleDateString()}</span>
                </div>
                {software.status !== 'up-to-date' && (
                  <Button className="w-full flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    {software.status === 'beta-available' ? 'Install Beta' : 'Update Now'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;