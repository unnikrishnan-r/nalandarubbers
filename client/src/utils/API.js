import axios from "axios";

export default {
  getDepartmentList: function () {
    return axios.get("/api/department");
  },
  deleteDepartment: function (id) {
    return axios.delete("/api/department/"+id);
  },
  createDepartment: function (req){
    return axios.post("/api/department", req)
  },
  getCustomerList: function (){
    return axios.get("/api/newcustomer")
  },
  deleteCustomer: function (id) {
    return axios.delete("/api/newcustomer/"+id);
  },
  createCustomer: function (req){
    return axios.post("/api/newcustomer", req)
  }
};
