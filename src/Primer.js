import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Ime </th>
        <th>Posao</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Aspiring actress</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr>
    </tbody>
  );
};
const SimpleComponent = () => {
  return <div>Example</div>;
};

class Primer extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
        <SimpleComponent />
      </table>
    );
  }
}

export default Primer;
