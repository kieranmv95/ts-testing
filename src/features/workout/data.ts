import type { Workout } from '@/types';

export const data: Workout = {
  title: 'Strong Day 22',
  description: 'Today we really up the lift numbers making this a hard push',
  creationDate: 'today',
  categories: ['strength'],
  sections: [
    {
      title: 'Warm Up',
      description:
        'Today is a heavy session so there is emphasis on warming up the areas we will be targeting',
      exercises: [
        {
          id: 's1-jr-1',
          name: 'Jump Rope',
          type: 'Cardio',

          formType: 'time',
          sets: [
            {
              time: 120,
            },
          ],
        },
        {
          id: 's1-pu-1',
          name: 'Push-ups',
          type: 'Chest',
          formType: 'bodyWeight',
          sets: [
            {
              repetitions: 10,
              weight: 0,
            },
          ],
        },
        {
          id: 's1-bier-1',
          name: 'Banded Internal External Rotation',
          description: '1 rep = left and right part of movement',
          type: 'Chest',
          formType: 'reps',
          sets: [
            {
              repetitions: 15,
            },
          ],
        },
        {
          id: 's1-bfp-1',
          name: 'Banded Face Pulls',
          type: 'Arms',
          formType: 'reps',
          sets: [
            {
              repetitions: 20,
            },
          ],
        },
        {
          id: 's1-pu-2',
          name: 'Push-ups',
          type: 'Chest',
          formType: 'bodyWeight',
          sets: [
            {
              repetitions: 10,
              weight: 0,
            },
          ],
        },
        {
          id: 's1-dw-1',
          name: 'Doorway Pec Stretch',
          description: 'repeat time for each side',
          type: 'Chest',
          formType: 'time',
          sets: [
            {
              time: 45,
            },
          ],
        },
      ],
    },
    {
      title: 'Primary Lifts',
      exercises: [
        {
          id: 's2ibp-1',
          name: 'Incline Bench Pres',
          type: 'Chest',
          description:
            'Each set should be max reps in 45 seconds. rest for 1 minute 30 between sets',
          formType: 'weightReps',
          sets: [
            {
              weight: 60,
            },
            {
              weight: 60,
            },
            {
              weight: 60,
            },
            {
              weight: 60,
            },
          ],
        },
        {
          id: 's2-pp-1',
          name: 'Push Press',
          type: 'Chest',
          description: 'rest 2 minutes between sets',
          formType: 'weightReps',
          sets: [
            {
              weight: 60,
              repetitions: 3,
            },
            {
              weight: 60,
              repetitions: 3,
            },
            {
              weight: 65,
              repetitions: 3,
            },
            {
              weight: 65,
              repetitions: 3,
            },
            {
              weight: 67.5,
              repetitions: 3,
            },
            {
              weight: 67.5,
              repetitions: 3,
            },
            {
              weight: 70,
              repetitions: 3,
            },
            {
              weight: 70,
              repetitions: 3,
            },
          ],
        },
      ],
    },
    {
      title: 'Accessory Work',
      exercises: [
        {
          id: 's3-sdn-1',
          name: 'Standing Dumbbell Overhead Press',
          type: 'Shoulders',
          formType: 'weightReps',
          sets: [
            {
              repetitions: 8,
            },
            {
              repetitions: 8,
            },
            {
              repetitions: 8,
            },
            {
              repetitions: 8,
            },
          ],
        },
        {
          id: 's3-efcv-1',
          name: 'Rolling Dumbbell Skull Crushers',
          type: 'Arms',
          formType: 'weightReps',
          sets: [
            {
              repetitions: 10,
            },
            {
              repetitions: 10,
            },
            {
              repetitions: 10,
            },
            {
              repetitions: 10,
            },
          ],
        },
        {
          id: 's3-wefwv-1',
          name: 'Meadows 6 Way Shoulder Raise',
          type: 'Shoulders',
          formType: 'weightReps',
          sets: [
            {
              repetitions: 8,
            },
            {
              repetitions: 8,
            },
            {
              repetitions: 8,
            },
            {
              repetitions: 8,
            },
          ],
        },
        {
          id: 's3-lkjh-1',
          name: 'Standing Single Arm Overhead Tricep Extension',
          type: 'Arms',
          description: '1 rep = left and right part of movement',
          formType: 'weightReps',
          sets: [
            {
              repetitions: 12,
            },
            {
              repetitions: 12,
            },
            {
              repetitions: 12,
            },
            {
              repetitions: 12,
            },
          ],
        },
        {
          id: 's3-w12f-v1',
          name: 'Standing Single Arm Overhead Tricep Extension',
          type: 'Arms',
          description: 'Try and complete in as few sets as possible',
          formType: 'reps',
          sets: [
            {
              repetitions: 100,
            },
          ],
        },
      ],
    },
  ],
};
