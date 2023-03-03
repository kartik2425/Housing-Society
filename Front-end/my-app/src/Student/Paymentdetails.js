import Axios from "axios";
import FileDownload from "js-file-download";
function Paymentdetails() {
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "http://localhost:4500/Paymentdetails",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log(res);
      FileDownload(res.data, "downloaded.png");
    });
  };
  return (
    <>
      <h1>This is your payment details</h1>
      <table class="table table-light tbl">
        <thead className="tab">
          <tr>
            <th scope="col">Sl No.</th>
            <th scope="col">payment details-click to Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            {/* <td>Pushpendra Sharma</td> */}
            <td>
              <button
                type="button"
                onClick={(e) => {
                  download(e);
                }}
                class="btn me-1 btn-outline-dark"
              >
                Download
              </button>
            </td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </>
  );
}
export default Paymentdetails;
