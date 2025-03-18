import React, { useState } from 'react';
import {
  Grid, Card, CardContent, CardMedia, Typography,
  Tabs, Tab, Box, Chip, Rating
} from '@mui/material';

const exercises = [
  {
    id: 1,
    name: 'Push-ups',
    category: 'Chest',
    difficulty: 3,
    image: '/assets/images/pushup.jpg',
    video: '/assets/videos/pushup.mp4',
    instructions: [
      'Start in a plank position',
      'Lower your body until chest nearly touches the ground',
      'Push back up to starting position',
      'Repeat'
    ],
    muscleGroups: ['Chest', 'Shoulders', 'Triceps']
  },
  // Add more exercises here
];

const ExerciseLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'Chest', 'Back', 'Legs', 'Arms', 'Core'];

  return (
    <Box sx={{ mt: 12, p: 3 }}>  {/* Added margin top */}
      <Typography variant="h4" gutterBottom>
        Exercise Library
      </Typography>
      
      <Tabs
        value={selectedCategory}
        onChange={(e, newValue) => setSelectedCategory(newValue)}
        sx={{ mb: 3 }}
      >
        {categories.map((category) => (
          <Tab 
            key={category} 
            label={category} 
            value={category}
          />
        ))}
      </Tabs>

      <Grid container spacing={3}>
        {exercises
          .filter(ex => selectedCategory === 'all' || ex.category === selectedCategory)
          .map((exercise) => (
            <Grid item xs={12} md={6} lg={4} key={exercise.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={exercise.image}
                  alt={exercise.name}
                />
                <CardContent>
                  <Typography variant="h6">{exercise.name}</Typography>
                  <Rating value={exercise.difficulty} readOnly max={5} />
                  <Box sx={{ mt: 1 }}>
                    {exercise.muscleGroups.map((muscle) => (
                      <Chip 
                        key={muscle} 
                        label={muscle} 
                        size="small" 
                        sx={{ mr: 0.5, mb: 0.5 }}
                      />
                    ))}
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    Instructions:
                  </Typography>
                  <ul>
                    {exercise.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default ExerciseLibrary;