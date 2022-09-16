import React from "react";
import cl from "./Leads.module.scss";

const Leads = () => {
  return (
    <div className={cl.leads}>
      <table>
        <thead>
          <tr>
            <td>Дата</td>
            <td>Имя</td>
            <td>Контакты</td>
            <td>------</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01.01. 2022</td>
            <td>Аскар</td>
            <td>0 777 000 111</td>
            <td>-------</td>
          </tr>
          <tr>
            <td>01.01. 2022</td>
            <td>Аскар</td>
            <td>0 777 000 111</td>
            <td>-------</td>
          </tr>
          <tr>
            <td>01.01. 2022</td>
            <td>Аскар</td>
            <td>0 777 000 111</td>
            <td>-------</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leads;
