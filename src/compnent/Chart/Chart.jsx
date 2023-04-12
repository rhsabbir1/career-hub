import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts';


const Chart = () => {
    const assingmentMarks = [
        {
            "subject": "Assingment - 1",
            "marks": 60,
           
            "fullMark": 60
        },
        {
            "subject": "Assingment - 2",
            "marks": 60,
         
            "fullMark": 60
        },
        {
            "subject": "Assingment - 3",
            "marks": 60,
         
            "fullMark": 60
        },
        {
            "subject": "Assingment - 4",
            "marks": 60,
            "fullMark": 60
        },
        {
            "subject": "Assingment - 5",
            "marks": 60,
         
            "fullMark": 60
        },
        {
            "subject": "Assingment - 6",
            "marks": 58,
         
            "fullMark": 60
        },
        {
            "subject": "Assingment - 7",
            "marks": 60,
         
            "fullMark": 60
        }
    ]
    return (
        <div className='w-3/5 mt-24  mx-auto'>
            <RadarChart outerRadius={90} width={730} height={250} data={assingmentMarks}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={90} domain={[0, 60]} />
                <Radar name="Marks" dataKey="marks" stroke="#8884d8" fill="#8884a4" fillOpacity={0.6} />
                <Radar name="FullMark" dataKey="fullMark" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
                 <Tooltip />
            </RadarChart>
        </div>
    );
};

export default Chart;