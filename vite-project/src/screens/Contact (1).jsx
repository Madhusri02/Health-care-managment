import { useState } from 'react';

export const Con = () => {
  return (
    <div className="contact">
      <div className="find_dr">
        <h4 className='heading'>FIND_Dr</h4>
      </div>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <h4 className='heading'>ABOUT</h4>
              <ul>
                <li><button>About us</button></li>
                <li><button>Blog</button></li>
                <li><button>FAQ</button></li>
                <li><button>Login</button></li>
                <li><button>Register</button></li>
              </ul>
            </td>
            <td>
              <h4 className='heading1'>USEFUL LINKS</h4>
              <ul>
                <li><button>Doctors</button></li>
                <li><button>Clinics</button></li>
                <li><button>Specialization</button></li>
                <li><button>Join as a Doctor</button></li>
                <li><button>Download App</button></li>
              </ul>
            </td>
            <td>
              <h4 className='heading'>CONTACT US</h4>
              <ul>
                <li><button>9122334455</button></li>
                <li><button>online_consultation@gmail.com</button></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
