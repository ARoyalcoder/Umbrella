import React from 'react'
import { Card } from "@/components/ui/card";
import { CardContent } from '@/components/ui/card';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';



const Course = ({ course }) => {
    console.log(course);
    return (
        <Link to={`/course-detail/${course._id}`}>
            <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className='relative'>
                    <img
                        src={course.courseThumbnail}
                        className="w-full h-36 object-center object-cover rounded-t-xl"
                    />
                </div>
                <CardContent className="px-5 py-4 space-y-3">
                    <h1 className='hover:font-bold text-lg truncate'> {course.courseTitle}</h1>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={course.creator?.PhotoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h1>{course.creator?.name}</h1>
                        </div>
                        <Badge className="bg-blue-600 text-white px-2 py-1 text-xs rounded-full">
                            {course.courseLevel}
                        </Badge>
                    </div>
                    <div className='text-lg font-bold'>
                        <span>₹{course.coursePrice}</span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default Course;