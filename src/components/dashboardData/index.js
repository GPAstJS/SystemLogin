import Work from '../../assets/images/icon-work.svg'
import Play from '../../assets/images/icon-play.svg'
import Study from '../../assets/images/icon-study.svg'
import Exercise from '../../assets/images/icon-exercise.svg'
import Social from '../../assets/images/icon-social.svg'
import Selfcare from '../../assets/images/icon-self-care.svg'


const dashboardData = [
    {
        title: 'Work',
        image: Work,
        background: 'var(--light-red)',
        description: 'Work Icon',
        currentDailyHours: 7,
        previousDailyHours: 5,
        currentWeeklyHours: 32,
        previousWeeklyHours: 36,
        currentMonthlyHours: 103,
        previousMonthlyHours: 128
    },
    {
        title: 'Play',
        image: Play,
        description: "Play Icon",
        background: 'var(--soft-blue)',
        currentDailyHours: 1,
        previousDailyHours: 2,
        currentWeeklyHours: 10,
        previousWeeklyHours: 8,
        currentMonthlyHours: 23,
        previousMonthlyHours: 29,
    },
    {
        title: 'Study',
        image: Study,
        description: 'Study Icon',
        background: 'var(--light-red-study)',
        currentDailyHours: 0,
        previousDailyHours: 1,
        currentWeeklyHours: 4,
        previousWeeklyHours: 7,
        currentMonthlyHours: 13,
        previousMonthlyHours: 19
    },
    {
        title: 'Exercise',
        image: Exercise,
        description: 'Exercise Icon',
        background: 'var(--lime-green)',
        currentDailyHours: 1,
        previousDailyHours: 1,
        currentWeeklyHours: 4,
        previousWeeklyHours: 5,
        currentMonthlyHours: 11,
        previousMonthlyHours: 18
    },
    {
        title: 'Social',
        image: Social,
        description: 'Social Icon',
        background: 'var(--violet)',
        currentDailyHours: 1,
        previousDailyHours: 3,
        currentWeeklyHours: 5,
        previousWeeklyHours: 10,
        currentMonthlyHours: 21,
        previousMonthlyHours: 23
    },
    {
        title: 'Self Care',
        image: Selfcare,
        description: "Selfcare Icon",
        background: 'var(--soft-orange)',
        currentDailyHours: 0,
        previousDailyHours: 1,
        currentWeeklyHours: 2,
        previousWeeklyHours: 2,
        currentMonthlyHours: 7,
        previousMonthlyHours: 11,
    }
]

export default dashboardData