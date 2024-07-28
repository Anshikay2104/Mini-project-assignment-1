import React from 'react';
import "../styles.css";
import { ToastContainer, toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css';

const UserList = () => {
  return (
    <div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>User 1</td>
            <td>Anshika Yadav</td>
            <td>anshikay1234@gmail.com</td>
            <td><button onClick={() => toast.info('Viewing User 1 profile')}>View Profile</button></td>
          </tr>
          <tr>
            <td>User 2</td>
            <td>Aditi Upadhyay</td>
            <td>aditiUpa123@gmail.com</td>
            <td><button onClick={() => toast.info('Viewing User 2 profile')}>View Profile</button></td>
          </tr>
          <tr>
            <td>User 2</td>
            <td>Aastha Parashar</td>
            <td>asthaPar123@gmail.com</td>
            <td><button onClick={() => toast.info('Viewing User 3 profile')}>View Profile</button></td>
          </tr>
          <tr>
            <td>User 2</td>
            <td>Vanshika Gupta</td>
            <td>VanshikaG123@gmail.com</td>
            <td><button onClick={() => toast.info('Viewing User 4 profile')}>View Profile</button></td>
          </tr>
          <tr>
            <td>User 2</td>
            <td>Yashi Jindal</td>
            <td>YashiJin123@gmail.com</td>
            <td><button onClick={() => toast.info('Viewing User 5 profile')}>View Profile</button></td>
          </tr>
        </tbody>
      </table>
      <ToastContainer /> 
    </div>
  );
};

export default UserList;
