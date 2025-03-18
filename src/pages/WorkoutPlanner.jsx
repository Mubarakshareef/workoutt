import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Box
} from '@mui/material';

const WorkoutPlanner = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [difficulty, setDifficulty] = useState('intermediate');
  const [intensity, setIntensity] = useState(5);
  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState([]);

  const muscleGroups = [
    'Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core'
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Create Workout Plan
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Workout Details
            </Typography>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                label="Workout Name"
                value={workoutName}
                onChange={(e) => setWorkoutName(e.target.value)}
                sx={{ mb: 2 }}
              />
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Difficulty Level</InputLabel>
                <Select
                  value={difficulty}
                  label="Difficulty Level"
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <MenuItem value="beginner">Beginner</MenuItem>
                  <MenuItem value="intermediate">Intermediate</MenuItem>
                  <MenuItem value="advanced">Advanced</MenuItem>
                </Select>
              </FormControl>
              <Typography gutterBottom>Workout Intensity</Typography>
              <Slider
                value={intensity}
                onChange={(e, newValue) => setIntensity(newValue)}
                min={1}
                max={10}
                marks
                valueLabelDisplay="auto"
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Target Muscle Groups
            </Typography>
            <FormControl fullWidth>
              <Select
                multiple
                value={selectedMuscleGroups}
                onChange={(e) => setSelectedMuscleGroups(e.target.value)}
                renderValue={(selected) => selected.join(', ')}
              >
                {muscleGroups.map((muscle) => (
                  <MenuItem key={muscle} value={muscle}>
                    {muscle}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Exercise Selection
            </Typography>
            {/* Exercise selection component will be added here */}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" size="large">
          Save Workout Plan
        </Button>
      </Grid>
    </Grid>
  );
};

export default WorkoutPlanner;