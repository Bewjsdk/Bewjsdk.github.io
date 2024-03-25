import { courseData } from "../../data/course";

function CourseLists() {
  const courseItems = courseData.map(course => (
    <div className="course-item" key={course.id}>
      {course.icon()}
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button className="btn btn-course">Get Started</button>
    </div>
  ));

  return (
    <>
      <div className="course-item start">
        <h2>Check out our most popular courses!</h2>
      </div>
      {/* All Course Lists */}
      {courseItems}
    </>
  );
}

export default CourseLists