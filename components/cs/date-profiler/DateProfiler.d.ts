interface workExperience {
    workName: string,
    workDate: string,
    workTasks: string[],
    taskDesc: string,
}

interface studyExperience {
    studyFacility: string,
    studyDate: string,
    studyName: string,
    course: string,
    faculty: string,
    major: string,
}

interface DateProfilerProps {
    dateLine: string,
    dateTitle: string,
}

interface DateProfilerWorkProps {
    workExp: workExperience[];
}


interface DateProfilerStudyProps {
    studyExp: studyExperience[];
}

export {DateProfilerWorkProps, DateProfilerStudyProps, DateProfilerProps}