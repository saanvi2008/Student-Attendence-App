import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import db from '../config';

class SummaryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      present_students: [],
      absent_students: [],
    };
  }

  getTodaysDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    return today;
  }

  resetdb =()=>{
    var resetdb = db.ref('class/').set({
      
    })
  }

  componentDidMount = async () => {
    var today = await this.getTodaysDate();

    var students_ref = db.ref('class/').on('value', (data) => {
      var class_a = data.val();
      var present_students = [];
      var absent_students = [];

      for (var i in class_a) {
        if (class_a[i][today] === 'present') {
          present_students.push(class_a[i]);
        }
        if (class_a[i][today] === 'absent') {
          absent_students.push(class_a[i]);
        }
      }

      present_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      absent_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      this.setState({
        present_students: present_students,
        absent_students: absent_students,
      });
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1 }}></View>

        <Text style={styles.title}>Attendance of Students is:-</Text>

        <View style={styles.present}>
          {this.state.present_students.map((student, index) => (
            <Text style={{ fontSize: 18 }}>{student.name}</Text>
          ))}
        </View>

        <View style={styles.absent}>
          {this.state.absent_students.map((student, index) => (
            <Text style={{ fontSize: 18 }}>{student.name}</Text>
          ))}
        </View>
        <View style={{}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'orange',
              marginLeft: 28,
            }}>
            Total: 5 Students
          </Text>

          <Text style={styles.present}>
            Present: {this.state.present_students.length}
          </Text>

          <Text style={styles.present}>
            Absent: {this.state.absent_students.length}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  present: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'orange',
    marginLeft: 28,
  },

  absent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 40,
  },
});

export default SummaryScreen;