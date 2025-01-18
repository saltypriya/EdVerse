import React from 'react';
import '../styles/dashboard.css';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const studentName = 'Priya Sharma';
  const overallProgress = 75; // Example: 75% overall progress

  const subjects = [
    { name: 'Mathematics', progress: 85 },
    { name: 'Physics', progress: 70 },
    { name: 'Computer Science', progress: 90 },
    { name: 'Chemistry', progress: 60 },
    { name: 'English', progress: 80 },
  ];

  // Data for line chart (e.g., progress over the last 6 months)
  const progressData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Overall Progress',
        data: [70, 72, 74, 76, 78, overallProgress], // Progress data for each month
        borderColor: '#76c7c0',
        backgroundColor: 'rgba(118, 199, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Data for pie chart (Subject-wise progress)
  const subjectData = {
    labels: subjects.map(subject => subject.name),
    datasets: [
      {
        data: subjects.map(subject => subject.progress),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#FF9F40',
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Student Progress Dashboard</h1>
        <h2>Welcome, {studentName}!</h2>
      </header>

      <section className="progress-overview">
        <h3>Overall Progress</h3>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${overallProgress}%` }}
          >
            {overallProgress}%
          </div>
        </div>
      </section>

      <section className="chart-section">
        <h3>Progress over Time</h3>
        <div className="chart">
          <Line data={progressData} options={{ responsive: true, plugins: { title: { display: true, text: 'Progress Over Time' } } }} />
        </div>
      </section>

      <section className="chart-section">
        <h3>Subject-wise Progress</h3>
        <div className="chart">
          <Pie data={subjectData} options={{ responsive: true, plugins: { title: { display: true, text: 'Subject-wise Progress' } } }} />
        </div>
      </section>

      <section className="subject-progress">
        <h3>Subject Progress</h3>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index}>
              <span>{subject.name}</span>
              <div className="subject-progress-bar">
                <div
                  className="progress-bar"
                  style={{ width: `${subject.progress}%` }}
                >
                  {subject.progress}%
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
