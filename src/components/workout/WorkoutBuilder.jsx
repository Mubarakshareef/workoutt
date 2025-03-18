import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip
} from '@mui/material';

const WorkoutBuilder = () => {
  const [workout, setWorkout] = useState({
    name: '',
    difficulty: 'intermediate',
    intensity: 5,
    exercises: [],
    targetAreas: []
  });

  const difficultyLevels = ['beginner', 'intermediate', 'advanced'];
  const bodyAreas = ['Chest', 'Back', 'Legs', 'Arms', 'Core', 'Shoulders'];

  const handleIntensityChange = (event, newValue) => {
    setWorkout({ ...workout, intensity: newValue });
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Workout Details
              </Typography>
              <TextField
                fullWidth
                label="Workout Name"
                value={workout.name}
                onChange={(e) => setWorkout({ ...workout, name: e.target.value })}
                sx={{ mb: 2 }}
              />
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Difficulty Level</InputLabel>
                <Select
                  value={workout.difficulty}
                  label="Difficulty Level"
                  onChange={(e) => setWorkout({ ...workout, difficulty: e.target.value })}
                >
                  {difficultyLevels.map((level) => (
                    <MenuItem key={level} value={level}>
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography gutterBottom>Workout Intensity</Typography>
              <Slider
                value={workout.intensity}
                onChange={handleIntensityChange}
                min={1}
                max={10}
                marks
                valueLabelDisplay="auto"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Target Areas
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {bodyAreas.map((area) => (
                  <Chip
                    key={area}
                    label={area}
                    clickable
                    color={workout.targetAreas.includes(area) ? 'primary' : 'default'}
                    onClick={() => {
                      const newAreas = workout.targetAreas.includes(area)
                        ? workout.targetAreas.filter(a => a !== area)
                        : [...workout.targetAreas, area];
                      setWorkout({ ...workout, targetAreas: newAreas });
                    }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkoutBuilder;