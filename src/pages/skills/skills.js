import React, { Component } from 'react';
import "./skills.css";
import startIcon from "../../assets/images/start.png";

import {
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiBasicTable,
  EuiIcon,
} from "@elastic/eui";


class Skills extends Component {
  constructor(props) {
    super(props);
    const skills = [
      { name: "Github", years: 1, level: 2 },
      { name: "SQL Server", years: 10, level: 5 },
      { name: "PL/SQL", years: 10, level: 5 },
      { name: "Javascript", years: 0.5, level: 2 },
      { name: ".NET", years: 5, level: 3 },
      { name: "React", years: 0.5, level: 1 },
      { name: "R", years: 0.5, level: 1 },
      { name: "CSS", years: 0.5, level: 2 },
      { name: "HTML", years: 0.5, level: 2 },
      { name: "Spanish", level: 5 },
      { name: "English", level: 4 },
    ];    
    this.state = {
      sortField: 'name',
      sortDirection: 'asc',
      skills
    };
  }

  compareValues = (key, order = 'asc') => {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }    

  onTableChange = ({sort = {} }) => {
    const { field: sortField, direction: sortDirection } = sort;
    const skills= this.state.skills;
    skills.sort(this.compareValues(sortField, sortDirection))

    this.setState({
      sortField,
      sortDirection,
    });
  };


  render() {
    const { sortField, sortDirection, skills } = this.state;

    const sorting = {
      sort: {
        field: sortField,
        direction: sortDirection,
      },
    };

    const getLevel = level => {
      var starts = [<EuiIcon size="xl" type={startIcon} />];
      for (var i = 1; i < level; i++) {
        starts.push(<EuiIcon size="xl" type={startIcon} />);
      }
      return starts;
    };

    const columns = [
      {
        field: "name",
        name: "Skill",
        sortable: true,
        header: true,
        width: '20%',
      },
      // {
      //   field: "years",
      //   name: "Years of Experience",
      //   sortable: true,
      //   header: true,
      //   dataType: "number",
      //   width: '30%',
      // },
      {
        field: "level",
        name: "Level",
        sortable: true,
        header: true,
        render: level => getLevel(level),
        width: '40%',
      }
    ];

    return (
    <EuiPage>
      <EuiPageBody>
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Skills</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiBasicTable
          items={skills}
          columns={columns}
          sorting={sorting}
          onChange={this.onTableChange}  
        />
      </EuiPageBody>
    </EuiPage>
    )
  }
}

export default Skills;
