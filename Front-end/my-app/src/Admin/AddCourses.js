import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
// import { MyContext } from "../../MyProvider";
import { MyContext } from "../MyProvider";
const AddCourses = () => {
  const context = useContext(MyContext);
  const [postImage, setPostImage] = useState("");
  const [teacher_id, setteacher_id] = useState("");
  console.log(context.state);
  const [courseInfo, setCourseInfo] = useState({
    courseTitle: "",
    coursePrice: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseInfo({
      ...courseInfo,
      [name]: value,
    });
  };
  const addCourse = () => {
    const { courseTitle, coursePrice } = courseInfo;
    if (courseTitle && coursePrice) {
      alert(teacher_id);
      axios
        .post("http://localhost:4500/AddCourse", {
          courseInfo,
          postImage,
          teacher_id,
        })
        .then((res) => {
          alert(res.data.message);
        })
        .catch((error) => {
          alert("Got some error ", error);
        });
    } else {
      alert("Plz fill all the fields");
    }
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const base64 = await convertToBase64(file);
    // console.log(base64);
    setPostImage({ ...postImage, base64 });
    console.log(postImage);
  };

  return (
    <>
      <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Add Course</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Course"
              onChange={handleChange}
              name="courseTitle"
              value={courseInfo.courseTitle}
            />
            {/* <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">teacher_id</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Course"
              value={teacher_id}
              onChange={(e) => {
                setteacher_id(e.target.value);
              }}
              name="courseTitle"
            />
            {/* <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Course Price</label>
            <input
              type="Number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Add the Price"
              onChange={handleChange}
              name="coursePrice"
              value={courseInfo.coursePrice}
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlFile1">Choose Course Image</label>
            <br />
            <input
              type="file"
              name="myFile"
              className="form-control-file"
              id="exampleFormControlFile1"
              accept=".jpeg,.png,.jpg"
              onChange={(e) => {
                handleFileUpload(e);
              }}
            />
          </div>

          <button type="button" onClick={addCourse} class="btn btn-primary">
            Add Course
          </button>
        </form>
      </div>
    </>
  );
};
export default AddCourses;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
