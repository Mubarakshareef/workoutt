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
    image: 'https://picsum.photos/seed/pushups/400/300',
    instructions: [
      'Start in a plank position',
      'Lower your body until chest nearly touches the ground',
      'Push back up to starting position',
      'Repeat'
    ],
    muscleGroups: ['Chest', 'Shoulders', 'Triceps']
  },
  {
    id: 2,
    name: 'Bench Press',
    category: 'Chest',
    difficulty: 4,
    image: 'https://picsum.photos/seed/benchpress/400/300',
    instructions: [
      'Lie on bench with feet flat on ground',
      'Grip barbell slightly wider than shoulder width',
      'Lower bar to chest',
      'Press bar up to starting position'
    ],
    muscleGroups: ['Chest', 'Shoulders', 'Triceps']
  },
  {
    id: 3,
    name: 'Pull-ups',
    category: 'Back',
    difficulty: 4,
    image: 'https://picsum.photos/seed/pullups/400/300',
    instructions: [
      'Hang from pull-up bar with hands wider than shoulders',
      'Pull yourself up until chin passes bar',
      'Lower back down with control',
      'Repeat'
    ],
    muscleGroups: ['Back', 'Biceps', 'Shoulders']
  },
  {
    id: 4,
    name: 'Deadlift',
    category: 'Back',
    difficulty: 5,
    image: 'https://picsum.photos/seed/deadlift/400/300',
    instructions: [
      'Stand with feet hip-width apart',
      'Bend at hips and knees to grip bar',
      'Keep back straight and lift bar',
      'Return bar to ground with control'
    ],
    muscleGroups: ['Back', 'Legs', 'Core']
  },
  {
    id: 5,
    name: 'Bicep Curls',
    category: 'Arms',
    difficulty: 2,
    image: 'https://picsum.photos/seed/biceps/400/300',
    instructions: [
      'Stand with dumbbells at sides',
      'Curl weights up to shoulders',
      'Lower weights back down',
      'Keep elbows close to body'
    ],
    muscleGroups: ['Biceps', 'Forearms']
  },
  {
    id: 6,
    name: 'Tricep Dips',
    category: 'Arms',
    difficulty: 3,
    image: 'https://picsum.photos/seed/triceps/400/300',
    instructions: [
      'Support body between parallel bars',
      'Lower body by bending arms',
      'Push back up to straight arms',
      'Keep elbows close to body'
    ],
    muscleGroups: ['Triceps', 'Chest', 'Shoulders']
  },
  {
    id: 7,
    name: 'Squats',
    category: 'Legs',
    difficulty: 4,
    image: 'https://picsum.photos/seed/squats/400/300',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Lower body by bending knees',
      'Keep back straight and chest up',
      'Return to standing position'
    ],
    muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes']
  },
  {
    id: 8,
    name: 'Lunges',
    category: 'Legs',
    difficulty: 3,
    image: 'https://picsum.photos/seed/lunges/400/300',
    instructions: [
      'Step forward with one leg',
      'Lower body until both knees at 90 degrees',
      'Push back to starting position',
      'Alternate legs'
    ],
    muscleGroups: ['Quadriceps', 'Hamstrings', 'Glutes']
  },
  {
    id: 9,
    name: 'Plank',
    category: 'Core',
    difficulty: 2,
    image: 'https://picsum.photos/seed/plank/400/300',
    instructions: [
      'Start in forearm plank position',
      'Keep body straight from head to heels',
      'Engage core muscles',
      'Hold position'
    ],
    muscleGroups: ['Core', 'Shoulders']
  },
  {
    id: 10,
    name: 'Russian Twists',
    category: 'Core',
    difficulty: 3,
    image: 'https://picsum.photos/seed/russiantwists/400/300',
    instructions: [
      'Sit with knees bent and feet off ground',
      'Lean back slightly',
      'Rotate torso side to side',
      'Keep core engaged'
    ],
    muscleGroups: ['Core', 'Obliques']
  }
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