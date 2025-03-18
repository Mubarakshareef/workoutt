import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const Progress = () => {
  // Group exercises by category for the chart
  const exercisesByCategory = {
    Chest: 2,
    Back: 2,
    Arms: 2,
    Legs: 2,
    Core: 2
  };

  const chartData = Object.entries(exercisesByCategory).map(([category, count]) => ({
    category,
    count,
    completed: Math.floor(Math.random() * count) // For demo purposes
  }));

  return (
    <Box sx={{ mt: 12 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>Progress Tracking</Typography>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Workout Progress by Category
              </Typography>
              <Box sx={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                  <BarChart
                    data={chartData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="count" 
                      name="Total Exercises" 
                      fill="#8884d8" 
                    />
                    <Bar 
                      dataKey="completed" 
                      name="Completed" 
                      fill="#82ca9d" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Weekly Progress
              </Typography>
              <Box sx={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <BarChart
                    data={[
                      { day: 'Mon', workouts: 2 },
                      { day: 'Tue', workouts: 3 },
                      { day: 'Wed', workouts: 1 },
                      { day: 'Thu', workouts: 4 },
                      { day: 'Fri', workouts: 2 },
                      { day: 'Sat', workouts: 3 },
                      { day: 'Sun', workouts: 0 }
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar 
                      dataKey="workouts" 
                      name="Workouts Completed" 
                      fill="#2196f3" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Difficulty Distribution
              </Typography>
              <Box sx={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <BarChart
                    data={[
                      { level: 'Beginner', count: 3 },
                      { level: 'Intermediate', count: 4 },
                      { level: 'Advanced', count: 3 }
                    ]}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="level" />
                    <YAxis />
                    <Tooltip />
                    <Bar 
                      dataKey="count" 
                      name="Exercises" 
                      fill="#ff9800" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Progress;