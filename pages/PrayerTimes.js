export default function PrayerTimes(){

    const monthlyPrayerTimes = [
        {
        'date':'2022-10-01',
        'fajrAzzan':'05:36 AM',
        'fajrIqamah':'06:30 AM',
        'sunriseTime':'07:34 AM',
        'zohrAzzan':'01:24 PM',
        'zohrIqamah':'02:00 PM',
        'asrAzzan':'04:28 PM',
        'asrIqamah':'05:00 PM',
        'maghribAzzan':'07:14 PM',
        'maghribIqamah':'07:19 PM',
        'ishaAzzan':'09:03 PM',
        'ishaIqamah':'09:08 PM'
        },
        {
        'date':'2022-10-02',
        'fajrAzzan':'05:38 AM',
        'fajrIqamah':'06:30 AM',
        'sunriseTime':'07:36 AM',
        'zohrAzzan':'01:24 PM',
        'zohrIqamah':'02:00 PM',
        'asrAzzan':'04:26 PM',
        'asrIqamah':'05:00 PM',
        'maghribAzzan':'07:11 PM',
        'maghribIqamah':'07:16 PM',
        'ishaAzzan':'09:00 PM',
        'ishaIqamah':'09:05 PM'
        },
        {
        'date':'2022-10-03',
        'fajrAzzan':'05:40 AM',
        'fajrIqamah':'06:30 AM',
        'sunriseTime':'07:37 AM',
        'zohrAzzan':'01:24 PM',
        'zohrIqamah':'02:00 PM',
        'asrAzzan':'04:24 PM',
        'asrIqamah':'05:00 PM',
        'maghribAzzan':'07:09 PM',
        'maghribIqamah':'07:14 PM',
        'ishaAzzan':'08:58 PM',
        'ishaIqamah':'09:03 PM'
        },
        {
        'date':'2022-10-04',
        'fajrAzzan':'05:42 AM',
        'fajrIqamah':'06:30 AM',
        'sunriseTime':'07:39 AM',
        'zohrAzzan':'01:23 PM',
        'zohrIqamah':'02:00 PM',
        'asrAzzan':'04:22 PM',
        'asrIqamah':'05:00 PM',
        'maghribAzzan':'07:06 PM',
        'maghribIqamah':'07:11 PM',
        'ishaAzzan':'08:55 PM',
        'ishaIqamah':'09:00 PM'
        },
        {
        'date':'2022-10-05',
        'fajrAzzan':'05:44 AM',
        'fajrIqamah':'06:30 AM',
        'sunriseTime':'07:41 AM',
        'zohrAzzan':'01:23 PM',
        'zohrIqamah':'02:00 PM',
        'asrAzzan':'04:21 PM',
        'asrIqamah':'05:00 PM',
        'maghribAzzan':'07:04 PM',
        'maghribIqamah':'07:19 PM',
        'ishaAzzan':'08:53 PM',
        'ishaIqamah':'08:58 PM'
        },
        {
        'date':'2022-10-06',
        'fajrAzzan':'05:46 AM',
        'fajrIqamah':'06:30 AM',
        'sunriseTime':'07:43 AM',
        'zohrAzzan':'01:23 PM',
        'zohrIqamah':'02:00 PM',
        'asrAzzan':'04:19 PM',
        'asrIqamah':'05:00 PM',
        'maghribAzzan':'07:01 PM',
        'maghribIqamah':'07:06 PM',
        'ishaAzzan':'08:50 PM',
        'ishaIqamah':'08:55 PM'
        },
        {
        'date':'2022-10-07',
        'fajrAzzan':'05:48 AM',
        'fajrIqamah':'06:30 AM',
        'sunriseTime':'07:45 AM',
        'zohrAzzan':'01:22 PM',
        'zohrIqamah':'02:00 PM',
        'asrAzzan':'04:17 PM',
        'asrIqamah':'05:00 PM',
        'maghribAzzan':'06:59 PM',
        'maghribIqamah':'07:04 PM',
        'ishaAzzan':'08:48 PM',
        'ishaIqamah':'08:53 PM'
        },
        {
        'date':'2022-10-08',
        'fajrAzzan':'05:50 AM',
        'fajrIqamah':'06:30 AM',
        'sunriseTime':'07:47 AM',
        'zohrAzzan':'01:22 PM',
        'zohrIqamah':'02:00 PM',
        'asrAzzan':'04:15 PM',
        'asrIqamah':'04:30 PM',
        'maghribAzzan':'06:57 PM',
        'maghribIqamah':'07:02 PM',
        'ishaAzzan':'08:45 PM',
        'ishaIqamah':'08:50 PM'
        },
        {
        'date':'2022-10-09',
        'fajrAzzan':'05:52 AM',
        'fajrIqamah':'06:30 AM',
        'sunriseTime':'07:48 AM',
        'zohrAzzan':'01:22 PM',
        'zohrIqamah':'02:00 PM',
        'asrAzzan':'04:13 PM',
        'asrIqamah':'04:30 PM',
        'maghribAzzan':'06:54 PM',
        'maghribIqamah':'06:59 PM',
        'ishaAzzan':'08:43 PM',
        'ishaIqamah':'08:48 PM'
        },
        {
        'date':'2022-10-10',
        'fajrAzzan':'05:54 AM',
        'fajrIqamah':'06:30 AM',
        'sunriseTime':'07:50 AM',
        'zohrAzzan':'01:22 PM',
        'zohrIqamah':'02:00 PM',
        'asrAzzan':'04:12 PM',
        'asrIqamah':'04:30 PM',
        'maghribAzzan':'06:52 PM',
        'maghribIqamah':'06:57 PM',
        'ishaAzzan':'08:41 PM',
        'ishaIqamah':'08:46 PM'
        },
        {
        'date':'2022-10-11',
        'fajrAzzan':'05:56 AM',
        'fajrIqamah':'06:30 AM',
        'sunriseTime':'07:52 AM',
        'zohrAzzan':'01:21 PM',
        'zohrIqamah':'02:00 PM',
        'asrAzzan':'04:10 PM',
        'asrIqamah':'04:30 PM',
        'maghribAzzan':'06:50 PM',
        'maghribIqamah':'06:55 PM',
        'ishaAzzan':'08:38 PM',
        'ishaIqamah':'08:43 PM'
        },
        {
        'date':'2022-10-12',
        'fajrAzzan':'05:58 AM',
        'fajrIqamah':'06:30 AM',
        'sunriseTime':'07:54 AM',
        'zohrAzzan':'01:21 PM',
        'zohrIqamah':'02:00 PM',
        'asrAzzan':'04:08 PM',
        'asrIqamah':'04:30 PM',
        'maghribAzzan':'06:46 PM',
        'maghribIqamah':'06:51 PM',
        'ishaAzzan':'08:36 PM',
        'ishaIqamah':'08:41 PM'
        },
        {
        'date':'2022-10-13',
        'fajrAzzan':'05:59 AM',
        'fajrIqamah':'06:30 AM',
        'sunriseTime':'07:56 AM',
        'zohrAzzan':'01:21 PM',
        'zohrIqamah':'02:00 PM',
        'asrAzzan':'04:06 PM',
        'asrIqamah':'04:30 PM',
        'maghribAzzan':'06:45 PM',
        'maghribIqamah':'06:50 PM',
        'ishaAzzan':'08:34 PM',
        'ishaIqamah':'08:39 PM'
        },
        {
        'date':'2022-10-14',
        'fajrAzzan':'06:01 AM',
        'fajrIqamah':'06:30 AM',
        'sunriseTime':'07:58 AM',
        'zohrAzzan':'01:21 PM',
        'zohrIqamah':'02:00 PM',
        'asrAzzan':'04:04 PM',
        'asrIqamah':'04:30 PM',
        'maghribAzzan':'06:43 PM',
        'maghribIqamah':'06:48 PM',
        'ishaAzzan':'08:31 PM',
        'ishaIqamah':'08:36 PM'
        },
      {
      'date':'2022-10-15',
      'fajrAzzan':'06:03 AM',
      'fajrIqamah':'06:30 AM',
      'sunriseTime':'08:00 AM',
      'zohrAzzan':'01:21 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'04:03 PM',
      'asrIqamah':'04:30 PM',
      'maghribAzzan':'06:41 PM',
      'maghribIqamah':'06:46 PM',
      'ishaAzzan':'08:29 PM',
      'ishaIqamah':'08:34 PM'
      },
      {
      'date':'2022-10-16',
      'fajrAzzan':'06:05 AM',
      'fajrIqamah':'06:30 AM',
      'sunriseTime':'08:01 AM',
      'zohrAzzan':'01:20 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'04:01 PM',
      'asrIqamah':'04:30 PM',
      'maghribAzzan':'06:38 PM',
      'maghribIqamah':'06:43 PM',
      'ishaAzzan':'08:27 PM',
      'ishaIqamah':'08:32 PM'
      },
      {
      'date':'2022-10-17',
      'fajrAzzan':'06:07 AM',
      'fajrIqamah':'06:30 AM',
      'sunriseTime':'08:03 AM',
      'zohrAzzan':'01:20 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:59 PM',
      'asrIqamah':'04:30 PM',
      'maghribAzzan':'06:35 PM',
      'maghribIqamah':'06:40 PM',
      'ishaAzzan':'08:25 PM',
      'ishaIqamah':'08:30 PM'
      },
      {
      'date':'2022-10-18',
      'fajrAzzan':'06:09 AM',
      'fajrIqamah':'06:30 AM',
      'sunriseTime':'08:05 AM',
      'zohrAzzan':'01:20 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:58 PM',
      'asrIqamah':'04:30 PM',
      'maghribAzzan':'06:34 PM',
      'maghribIqamah':'06:39 PM',
      'ishaAzzan':'08:23 PM',
      'ishaIqamah':'08:28 PM'
      },
      {
      'date':'2022-10-19',
      'fajrAzzan':'06:10 AM',
      'fajrIqamah':'06:30 AM',
      'sunriseTime':'08:07 AM',
      'zohrAzzan':'01:20 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:56 PM',
      'asrIqamah':'04:30 PM',
      'maghribAzzan':'06:31 PM',
      'maghribIqamah':'06:36 PM',
      'ishaAzzan':'08:20 PM',
      'ishaIqamah':'08:25 PM'
      },
      {
      'date':'2022-10-20',
      'fajrAzzan':'06:12 AM',
      'fajrIqamah':'06:30 AM',
      'sunriseTime':'08:09 AM',
      'zohrAzzan':'01:20 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:54 PM',
      'asrIqamah':'04:30 PM',
      'maghribAzzan':'06:29 PM',
      'maghribIqamah':'06:34 PM',
      'ishaAzzan':'08:18 PM',
      'ishaIqamah':'08:23 PM'
      },
      {
      'date':'2022-10-21',
      'fajrAzzan':'06:14 AM',
      'fajrIqamah':'06:30 AM',
      'sunriseTime':'08:11 AM',
      'zohrAzzan':'01:20 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:52 PM',
      'asrIqamah':'04:30 PM',
      'maghribAzzan':'06:27 PM',
      'maghribIqamah':'06:32 PM',
      'ishaAzzan':'08:16 PM',
      'ishaIqamah':'08:21 PM'
      },
      {
      'date':'2022-10-22',
      'fajrAzzan':'06:16 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:13 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:51 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'06:25 PM',
      'maghribIqamah':'06:30 PM',
      'ishaAzzan':'08:14 PM',
      'ishaIqamah':'08:19 PM'
      },
      {
      'date':'2022-10-23',
      'fajrAzzan':'06:18 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:15 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:49 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'06:23 PM',
      'maghribIqamah':'06:28 PM',
      'ishaAzzan':'08:12 PM',
      'ishaIqamah':'08:17 PM'
      },
      {
      'date':'2022-10-24',
      'fajrAzzan':'06:19 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:17 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:47 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'06:21 PM',
      'maghribIqamah':'06:26 PM',
      'ishaAzzan':'08:10 PM',
      'ishaIqamah':'08:15 PM'
      },
      {
      'date':'2022-10-25',
      'fajrAzzan':'06:21 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:19 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:46 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'06:19 PM',
      'maghribIqamah':'06:24 PM',
      'ishaAzzan':'08:08 PM',
      'ishaIqamah':'08:13 PM'
      },
      {
      'date':'2022-10-26',
      'fajrAzzan':'06:23 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:21 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:44 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'06:17 PM',
      'maghribIqamah':'06:22 PM',
      'ishaAzzan':'08:06 PM',
      'ishaIqamah':'08:11 PM'
      },
      {
      'date':'2022-10-27',
      'fajrAzzan':'06:25 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:23 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:43 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'06:14 PM',
      'maghribIqamah':'06:19 PM',
      'ishaAzzan':'08:05 PM',
      'ishaIqamah':'08:10 PM'
      },
      {
      'date':'2022-10-28',
      'fajrAzzan':'06:27 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:25 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:41 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'06:12 PM',
      'maghribIqamah':'06:17 PM',
      'ishaAzzan':'08:03 PM',
      'ishaIqamah':'08:08 PM'
      },
      {
      'date':'2022-10-29',
      'fajrAzzan':'06:28 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:26 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:39 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'06:10 PM',
      'maghribIqamah':'06:15 PM',
      'ishaAzzan':'08:01 PM',
      'ishaIqamah':'08:06 PM'
      },
      {
      'date':'2022-10-30',
      'fajrAzzan':'06:30 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:28 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:38 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'06:08 PM',
      'maghribIqamah':'06:13 PM',
      'ishaAzzan':'07:59 PM',
      'ishaIqamah':'08:04 PM'
      },
      {
      'date':'2022-10-31',
      'fajrAzzan':'06:32 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:30 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:36 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'06:06 PM',
      'maghribIqamah':'06:11 PM',
      'ishaAzzan':'07:57 PM',
      'ishaIqamah':'08:02 PM'
      },
      {
      'date':'2022-11-01',
      'fajrAzzan':'06:33 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:32 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:35 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'06:05 PM',
      'maghribIqamah':'06:10 PM',
      'ishaAzzan':'07:56 PM',
      'ishaIqamah':'08:01 PM'
      },
      {
      'date':'2022-11-02',
      'fajrAzzan':'06:35 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:34 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:33 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'06:03 PM',
      'maghribIqamah':'06:08 PM',
      'ishaAzzan':'07:54 PM',
      'ishaIqamah':'07:59 PM'
      },
      {
      'date':'2022-11-03',
      'fajrAzzan':'06:37 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:36 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:32 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'06:01 PM',
      'maghribIqamah':'06:06 PM',
      'ishaAzzan':'07:52 PM',
      'ishaIqamah':'07:57 PM'
      },
      {
      'date':'2022-11-04',
      'fajrAzzan':'06:39 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:38 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:30 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'05:59 PM',
      'maghribIqamah':'06:04 PM',
      'ishaAzzan':'07:51 PM',
      'ishaIqamah':'07:56 PM'
      },
      {
      'date':'2022-11-05',
      'fajrAzzan':'06:40 AM',
      'fajrIqamah':'06:45 AM',
      'sunriseTime':'08:40 AM',
      'zohrAzzan':'01:19 PM',
      'zohrIqamah':'02:00 PM',
      'asrAzzan':'03:29 PM',
      'asrIqamah':'04:00 PM',
      'maghribAzzan':'05:57 PM',
      'maghribIqamah':'06:02 PM',
      'ishaAzzan':'07:49 PM',
      'ishaIqamah':'07:54 PM'
      },
      {
      'date':'2022-11-06',
      'fajrAzzan':'05:42 AM',
      'fajrIqamah':'06:30 AM',
      'sunriseTime':'07:42 AM',
      'zohrAzzan':'12:19 PM',
      'zohrIqamah':'01:00 PM',
      'asrAzzan':'02:28 PM',
      'asrIqamah':'03:00 PM',
      'maghribAzzan':'04:55 PM',
      'maghribIqamah':'05:00 PM',
      'ishaAzzan':'06:48 PM',
      'ishaIqamah':'07:30 PM'
      },
      {
      'date':'2022-11-07',
      'fajrAzzan':'05:44 AM',
      'fajrIqamah':'06:30 AM',
      'sunriseTime':'07:44 AM',
      'zohrAzzan':'12:19 PM',
      'zohrIqamah':'01:00 PM',
      'asrAzzan':'02:26 PM',
      'asrIqamah':'03:00 PM',
      'maghribAzzan':'04:53 PM',
      'maghribIqamah':'04:58 PM',
      'ishaAzzan':'06:46 PM',
      'ishaIqamah':'07:30 PM'
      },
      {
      'date':'2022-11-08',
      'fajrAzzan':'05:45 AM',
      'fajrIqamah':'06:30 AM',
      'sunriseTime':'07:46 AM',
      'zohrAzzan':'12:19 PM',
      'zohrIqamah':'01:00 PM',
      'asrAzzan':'02:25 PM',
      'asrIqamah':'03:00 PM',
      'maghribAzzan':'04:52 PM',
      'maghribIqamah':'04:57 PM',
      'ishaAzzan':'06:45 PM',
      'ishaIqamah':'07:30 PM'
      },
      {
      'date':'2022-11-09',
      'fajrAzzan':'05:47 AM',
      'fajrIqamah':'06:30 AM',
      'sunriseTime':'07:48 AM',
      'zohrAzzan':'12:20 PM',
      'zohrIqamah':'01:00 PM',
      'asrAzzan':'02:24 PM',
      'asrIqamah':'03:00 PM',
      'maghribAzzan':'04:50 PM',
      'maghribIqamah':'04:55 PM',
      'ishaAzzan':'06:43 PM',
      'ishaIqamah':'07:30 PM'
      },
      {
      'date':'2022-11-10',
      'fajrAzzan':'05:49 AM',
      'fajrIqamah':'06:30 AM',
      'sunriseTime':'07:50 AM',
      'zohrAzzan':'12:20 PM',
      'zohrIqamah':'01:00 PM',
      'asrAzzan':'02:22 PM',
      'asrIqamah':'03:00 PM',
      'maghribAzzan':'04:48 PM',
      'maghribIqamah':'04:53 PM',
      'ishaAzzan':'06:42 PM',
      'ishaIqamah':'07:30 PM'
      },
      {
      'date':'2022-11-11',
      'fajrAzzan':'05:50 AM',
      'fajrIqamah':'06:30 AM',
      'sunriseTime':'07:52 AM',
      'zohrAzzan':'12:20 PM',
      'zohrIqamah':'01:00 PM',
      'asrAzzan':'02:21 PM',
      'asrIqamah':'03:00 PM',
      'maghribAzzan':'04:47 PM',
      'maghribIqamah':'04:52 PM',
      'ishaAzzan':'06:41 PM',
      'ishaIqamah':'07:30 PM'
      },
      {
      'date':'2022-11-12',
      'fajrAzzan':'05:52 AM',
      'fajrIqamah':'06:30 AM',
      'sunriseTime':'07:54 AM',
      'zohrAzzan':'12:20 PM',
      'zohrIqamah':'01:00 PM',
      'asrAzzan':'02:20 PM',
      'asrIqamah':'03:00 PM',
      'maghribAzzan':'04:45 PM',
      'maghribIqamah':'04:50 PM',
      'ishaAzzan':'06:39 PM',
      'ishaIqamah':'07:30 PM'
      },
      {
          'date':'2022-11-13',
          'fajrAzzan':'05:53 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'07:56 AM',
          'zohrAzzan':'12:20 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:19 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:43 PM',
          'maghribIqamah':'04:48 PM',
          'ishaAzzan':'06:38 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-14',
          'fajrAzzan':'05:55 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'07:58 AM',
          'zohrAzzan':'12:20 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:18 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:42 PM',
          'maghribIqamah':'04:47 PM',
          'ishaAzzan':'06:37 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-15',
          'fajrAzzan':'05:57 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:00 AM',
          'zohrAzzan':'12:20 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:16 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:40 PM',
          'maghribIqamah':'04:45 PM',
          'ishaAzzan':'06:36 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-16',
          'fajrAzzan':'05:58 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:01 AM',
          'zohrAzzan':'12:21 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:15 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:39 PM',
          'maghribIqamah':'04:44 PM',
          'ishaAzzan':'06:33 PM',
          'ishaIqamah':'07:30 PM'
          },{
          'date':'2022-11-17',
          'fajrAzzan':'06:00 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:03 AM',
          'zohrAzzan':'12:21 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:14 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:37 PM',
          'maghribIqamah':'04:42 PM',
          'ishaAzzan':'06:33 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-18',
          'fajrAzzan':'06:01 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:05 AM',
          'zohrAzzan':'12:21 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:13 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:36 PM',
          'maghribIqamah':'04:41 PM',
          'ishaAzzan':'06:32 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-19',
          'fajrAzzan':'06:03 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:07 AM',
          'zohrAzzan':'12:21 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:12 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:35 PM',
          'maghribIqamah':'04:40 PM',
          'ishaAzzan':'06:31 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-20',
          'fajrAzzan':'06:04 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:09 AM',
          'zohrAzzan':'12:22 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:11 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:33 PM',
          'maghribIqamah':'04:38 PM',
          'ishaAzzan':'06:30 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-21',
          'fajrAzzan':'06:06 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:10 AM',
          'zohrAzzan':'12:22 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:10 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:32 PM',
          'maghribIqamah':'04:37 PM',
          'ishaAzzan':'06:29 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-22',
          'fajrAzzan':'06:07 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:12 AM',
          'zohrAzzan':'12:22 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:10 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:31 PM',
          'maghribIqamah':'04:36 PM',
          'ishaAzzan':'06:29 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-23',
          'fajrAzzan':'06:08 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:14 AM',
          'zohrAzzan':'12:22 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:09 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:30 PM',
          'maghribIqamah':'04:35 PM',
          'ishaAzzan':'06:28 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-24',
          'fajrAzzan':'06:10 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:16 AM',
          'zohrAzzan':'12:23 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:08 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:29 PM',
          'maghribIqamah':'04:34 PM',
          'ishaAzzan':'06:27 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-25',
          'fajrAzzan':'06:11 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:18 AM',
          'zohrAzzan':'12:23 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:07 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:28 PM',
          'maghribIqamah':'04:33 PM',
          'ishaAzzan':'06:26 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-26',
          'fajrAzzan':'06:13 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:19 AM',
          'zohrAzzan':'12:23 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:06 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:27 PM',
          'maghribIqamah':'04:32 PM',
          'ishaAzzan':'06:25 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-27',
          'fajrAzzan':'06:14 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:21 AM',
          'zohrAzzan':'12:24 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:06 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:26 PM',
          'maghribIqamah':'04:31 PM',
          'ishaAzzan':'06:25 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-28',
          'fajrAzzan':'06:15 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:23 AM',
          'zohrAzzan':'12:24 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:05 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:25 PM',
          'maghribIqamah':'04:30 PM',
          'ishaAzzan':'06:24 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-29',
          'fajrAzzan':'06:16 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:24 AM',
          'zohrAzzan':'12:24 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:05 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:24 PM',
          'maghribIqamah':'04:29 PM',
          'ishaAzzan':'06:24 PM',
          'ishaIqamah':'07:30 PM'
          },
          {
          'date':'2022-11-30',
          'fajrAzzan':'06:18 AM',
          'fajrIqamah':'06:30 AM',
          'sunriseTime':'08:26 AM',
          'zohrAzzan':'12:25 PM',
          'zohrIqamah':'01:00 PM',
          'asrAzzan':'02:05 PM',
          'asrIqamah':'03:00 PM',
          'maghribAzzan':'04:23 PM',
          'maghribIqamah':'04:28 PM',
          'ishaAzzan':'06:23 PM',
          'ishaIqamah':'07:30 PM'
          }
          ,
{
  'date':'2022-12-01',
  'fajrAzzan':'06:19 AM',
  'fajrIqamah':'06:30 AM',
  'sunriseTime':'08:27 AM',
  'zohrAzzan':'12:25 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:03 PM',
  'asrIqamah':'03:00 PM',
  'maghribAzzan':'04:22 PM',
  'maghribIqamah':'04:27 PM',
  'ishaAzzan':'06:23 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-02',
  'fajrAzzan':'06:20 AM',
  'fajrIqamah':'06:30 AM',
  'sunriseTime':'08:29 AM',
  'zohrAzzan':'12:26 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:03 PM',
  'asrIqamah':'03:00 PM',
  'maghribAzzan':'04:21 PM',
  'maghribIqamah':'04:26 PM',
  'ishaAzzan':'06:22 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-03',
  'fajrAzzan':'06:21 AM',
  'fajrIqamah':'06:45 AM',
  'sunriseTime':'08:30 AM',
  'zohrAzzan':'12:26 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:03 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:21 PM',
  'maghribIqamah':'04:26 PM',
  'ishaAzzan':'06:22 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-04',
  'fajrAzzan':'06:22 AM',
  'fajrIqamah':'06:45 AM',
  'sunriseTime':'08:32 AM',
  'zohrAzzan':'12:26 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:02 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:20 PM',
  'maghribIqamah':'04:25 PM',
  'ishaAzzan':'06:21 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-05',
  'fajrAzzan':'06:24 AM',
  'fajrIqamah':'06:45 AM',
  'sunriseTime':'08:33 AM',
  'zohrAzzan':'12:27 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:02 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:20 PM',
  'maghribIqamah':'04:25 PM',
  'ishaAzzan':'06:21 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-06',
  'fajrAzzan':'06:25 AM',
  'fajrIqamah':'06:45 AM',
  'sunriseTime':'08:34 AM',
  'zohrAzzan':'12:27 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:02 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:19 PM',
  'maghribIqamah':'04:24 PM',
  'ishaAzzan':'06:21 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-07',
  'fajrAzzan':'06:26 AM',
  'fajrIqamah':'06:45 AM',
  'sunriseTime':'08:36 AM',
  'zohrAzzan':'12:28 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:01 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:19 PM',
  'maghribIqamah':'04:24 PM',
  'ishaAzzan':'06:21 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-08',
  'fajrAzzan':'06:27 AM',
  'fajrIqamah':'06:45 AM',
  'sunriseTime':'08:37 AM',
  'zohrAzzan':'12:28 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:01 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:18 PM',
  'maghribIqamah':'04:23 PM',
  'ishaAzzan':'06:20 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-09',
  'fajrAzzan':'06:28 AM',
  'fajrIqamah':'06:45 AM',
  'sunriseTime':'08:38 AM',
  'zohrAzzan':'12:28 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:01 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:18 PM',
  'maghribIqamah':'04:23 PM',
  'ishaAzzan':'06:20 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-10',
  'fajrAzzan':'06:29 AM',
  'fajrIqamah':'06:45 AM',
  'sunriseTime':'08:39 AM',
  'zohrAzzan':'12:29 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:01 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:18 PM',
  'maghribIqamah':'04:23 PM',
  'ishaAzzan':'06:20 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-11',
  'fajrAzzan':'06:30 AM',
  'fajrIqamah':'06:45 AM',
  'sunriseTime':'08:40 AM',
  'zohrAzzan':'12:29 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:01 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:17 PM',
  'maghribIqamah':'04:22 PM',
  'ishaAzzan':'06:20 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-12',
  'fajrAzzan':'06:30 AM',
  'fajrIqamah':'06:45 AM',
  'sunriseTime':'08:41 AM',
  'zohrAzzan':'12:30 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:01 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:17 PM',
  'maghribIqamah':'04:22 PM',
  'ishaAzzan':'06:20 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-13',
  'fajrAzzan':'06:31 AM',
  'fajrIqamah':'06:45 AM',
  'sunriseTime':'08:42 AM',
  'zohrAzzan':'12:30 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:01 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:17 PM',
  'maghribIqamah':'04:22 PM',
  'ishaAzzan':'06:20 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-14',
  'fajrAzzan':'06:32 AM',
  'fajrIqamah':'06:45 AM',
  'sunriseTime':'08:43 AM',
  'zohrAzzan':'12:31 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:01 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:17 PM',
  'maghribIqamah':'04:22 PM',
  'ishaAzzan':'06:20 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-15',
  'fajrAzzan':'06:33 AM',
  'fajrIqamah':'06:45 AM',
  'sunriseTime':'08:44 AM',
  'zohrAzzan':'12:31 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:01 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:17 PM',
  'maghribIqamah':'04:22 PM',
  'ishaAzzan':'06:20 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-16',
  'fajrAzzan':'06:34 AM',
  'fajrIqamah':'06:45 AM',
  'sunriseTime':'08:45 AM',
  'zohrAzzan':'12:32 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:01 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:17 PM',
  'maghribIqamah':'04:22 PM',
  'ishaAzzan':'06:21 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-17',
  'fajrAzzan':'06:34 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:46 AM',
  'zohrAzzan':'12:32 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:02 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:17 PM',
  'maghribIqamah':'04:22 PM',
  'ishaAzzan':'06:21 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-18',
  'fajrAzzan':'06:35 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:46 AM',
  'zohrAzzan':'12:33 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:02 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:18 PM',
  'maghribIqamah':'04:23 PM',
  'ishaAzzan':'06:21 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-19',
  'fajrAzzan':'06:35 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:47 AM',
  'zohrAzzan':'12:33 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:02 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:18 PM',
  'maghribIqamah':'04:23 PM',
  'ishaAzzan':'06:22 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-20',
  'fajrAzzan':'06:36 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:48 AM',
  'zohrAzzan':'12:33 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:03 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:18 PM',
  'maghribIqamah':'04:23 PM',
  'ishaAzzan':'06:22 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-21',
  'fajrAzzan':'06:37 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:49 AM',
  'zohrAzzan':'12:34 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:03 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:19 PM',
  'maghribIqamah':'04:24 PM',
  'ishaAzzan':'06:23 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-22',
  'fajrAzzan':'06:37 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:49 AM',
  'zohrAzzan':'12:34 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:03 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:19 PM',
  'maghribIqamah':'04:24 PM',
  'ishaAzzan':'06:23 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-23',
  'fajrAzzan':'06:37 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:49 AM',
  'zohrAzzan':'12:35 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:04 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:20 PM',
  'maghribIqamah':'04:25 PM',
  'ishaAzzan':'06:23 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-24',
  'fajrAzzan':'06:38 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:49 AM',
  'zohrAzzan':'12:35 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:05 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:21 PM',
  'maghribIqamah':'04:26 PM',
  'ishaAzzan':'06:24 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-25',
  'fajrAzzan':'06:38 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:50 AM',
  'zohrAzzan':'12:36 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:05 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:21 PM',
  'maghribIqamah':'04:26 PM',
  'ishaAzzan':'06:24 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-26',
  'fajrAzzan':'06:38 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:50 AM',
  'zohrAzzan':'12:36 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:06 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:22 PM',
  'maghribIqamah':'04:27 PM',
  'ishaAzzan':'06:25 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-27',
  'fajrAzzan':'06:39 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:50 AM',
  'zohrAzzan':'12:37 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:06 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:22 PM',
  'maghribIqamah':'04:27 PM',
  'ishaAzzan':'06:26 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-28',
  'fajrAzzan':'06:39 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:50 AM',
  'zohrAzzan':'12:37 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:07 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:23 PM',
  'maghribIqamah':'04:28 PM',
  'ishaAzzan':'06:26 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-29',
  'fajrAzzan':'06:39 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:50 AM',
  'zohrAzzan':'12:38 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:08 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:24 PM',
  'maghribIqamah':'04:29 PM',
  'ishaAzzan':'06:27 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-30',
  'fajrAzzan':'06:39 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:50 AM',
  'zohrAzzan':'12:38 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:09 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:25 PM',
  'maghribIqamah':'04:30 PM',
  'ishaAzzan':'06:28 PM',
  'ishaIqamah':'07:30 PM'
}
,
{
  'date':'2022-12-31',
  'fajrAzzan':'06:39 AM',
  'fajrIqamah':'07:00 AM',
  'sunriseTime':'08:50 AM',
  'zohrAzzan':'12:39 PM',
  'zohrIqamah':'01:00 PM',
  'asrAzzan':'02:10 PM',
  'asrIqamah':'02:30 PM',
  'maghribAzzan':'04:26 PM',
  'maghribIqamah':'04:31 PM',
  'ishaAzzan':'06:29 PM',
  'ishaIqamah':'07:30 PM'
}
      ]
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      const d = new Date()
      let month = months[d.getMonth()]
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      const dayOfWeek = days[d.getDay()]
      const dateOfMonth = d.getDate()
      const year = d.getFullYear()
    
      const dateTitle = `Prayer Times for ${dayOfWeek}, ${month} ${dateOfMonth} ${year}`
    
      const dateGreg = `${dayOfWeek}, ${month} ${dateOfMonth}, ${year}`
    
      const hijriDate = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now())
      const dateHijri = hijriDate
    
      function addHours(numOfHours, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000)
        return date
      }
      const today = addHours(-6).toJSON().slice(0, 10)
      const todaysPrayerTime = monthlyPrayerTimes.find(pt => pt.date === today)
    const fajrAzzan = todaysPrayerTime.fajrAzzan
    const fajrIqamah = todaysPrayerTime.fajrIqamah
    const sunriseTime = todaysPrayerTime.sunriseTime
    const zohrAzzan = todaysPrayerTime.zohrAzzan
    const zohrIqamah = todaysPrayerTime.zohrIqamah
    const asrAzzan = todaysPrayerTime.asrAzzan
    const asrIqamah = todaysPrayerTime.asrIqamah
    const maghribAzzan = todaysPrayerTime.maghribAzzan
    const maghribIqamah = todaysPrayerTime.maghribIqamah
    const ishaAzzan = todaysPrayerTime.ishaAzzan
    const ishaIqamah = todaysPrayerTime.ishaIqamah
    

    return(
        <section id="PrayerTimes" className='min-h-screen bg-gray-700 text-white p-10'>
          <div className='absolute'>
          <h1 className='text-9xl m-20'>Prayer Times</h1>
          <div className="prayerTimeTable w-full rounded-2xl">   
            <div className="bg-green-900 text-green-400 p-5 rounded-t-2xl">
            <h3 className='text-3xl'>
                  <span>{dateGreg}
                  </span>
                  </h3>
                  <h3 className='text-3xl'>
                  <span>{dateHijri}
                  </span>
                  </h3>
            </div>       
            <table className="table-auto w-full m-10">
              <thead>
                <tr>
                <th>
                </th>
                <th>
                  ADHAN
                </th>
                <th>
                  IQAMAH
                </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td className='p-2'>
                  FAJR
                </td>
                <td>
                  <span>{fajrAzzan}
                  </span>
                </td>
                <td>
                  <span>{fajrIqamah}
                  </span>
                </td>
                </tr>
                <tr>
                <td className='p-2'>
                  SUNRISE
                </td>
                <td>
                  <span>{sunriseTime}
                  </span>
                </td>
                <td>
                </td>
                </tr>
                <tr>
                <td className='p-2'>
                  ZUHR
                </td>
                <td>
                  <span>{zohrAzzan}
                  </span>
                </td>
                <td>
                  <span>{zohrIqamah}
                  </span>
                </td>
                </tr>
                <tr>
                <td className='p-2'>
                  ASR
                </td>
                <td>
                  <span>{asrAzzan}
                  </span>
                </td>
                <td>
                  <span>{asrIqamah}
                  </span>
                </td>
                </tr>
                <tr>
                <td className='p-2'>
                  MAGHRIB
                </td>
                <td>
                  <span>{maghribAzzan}
                  </span>
                </td>
                <td>
                  <span>{maghribIqamah}
                  </span>
                </td>
                </tr>
                <tr>
                <td className='p-2'>
                  ISHA
                </td>
                <td>
                  <span>{ishaAzzan}
                  </span>
                </td>
                <td>
                  <span>{ishaIqamah}
                  </span>
                </td>
                </tr>
                <tr>
                <td className='p-2'>
                  1st JUMMAH
                </td>
                <td colSpan="2">
                  12:30 PM
                </td>
                </tr>
                <tr>
                <td className='p-2'>
                  2nd JUMMAH
                </td>
                <td colSpan="2">
                  01:45 PM
                </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </section>
    )
}