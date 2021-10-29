<template>
  <v-row
    justify="center">
    <v-col cols="12" xl="6" lg="8" md="12">

      <v-container
        v-if="showStepper">
        <v-card>
          <v-card-title class="ml-4">Questionary</v-card-title>
          <v-divider></v-divider>
          <v-container class="ma-0 pa-0">
            <v-stepper
              v-model="step"
              vertical
              class="ma-0 pa-0"
              flat>
              
              <v-stepper-step
                class="py-2 pt-4"
                :complete="step > 1"
                step="1"
                color="primary">
                Question 1/10
                <small></small>
              </v-stepper-step>
              <v-stepper-content
                step="1">
                <v-card
                  color="white lighten-1"
                  class="ma-1 mb-4">
                  <!--<v-card-title class="font-weight-regular pb-0 mx-0 py-1 primary white--text">-->
                  <v-card-title class="font-weight-regular pb-0 mx-0 py-1 terciary white--text">
                    Are there any type of personnel shortfalls?
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions class="ml-2 pb-0">
                    <v-radio-group
                      class="my-0 pb-0 pl-4"
                      v-model="questions['1']"
                      column>
                      <v-radio
                        label="Yes"
                        color="primary"
                        value="true">
                      </v-radio>
                      <v-radio
                        label="No"
                        color="primary"
                        value="false">
                      </v-radio>
                    </v-radio-group>
                  </v-card-actions>
                  <!--<v-btn
                    :dark="questions['1'] !== null"
                    color="green"
                    :disabled="!questions['1']"
                    @click="step = 2"
                    class="ml-4 mb-4">
                    Continue
                  </v-btn>-->
                </v-card>
                <v-btn
                  :dark="questions['1'] !== null"
                  color="green"
                  :disabled="!questions['1']"
                  @click="step = 2"
                  class="ml-1 mb-1">
                  Continue
                </v-btn>
              </v-stepper-content>

              <v-stepper-step
                class="py-2"
                :complete="step > 2"
                step="2"
                color="primary">
                Question 2/10
                <small></small>
              </v-stepper-step>
              <v-stepper-content
                step="2">
                <v-card
                  color="white lighten-1"
                  class="ma-1 mb-4">
                  <v-card-title class="font-weight-regular pb-0 mx-0 py-1 terciary white--text">
                    Are you using unrealistic schedules and/or budgets?
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions class="ml-2 pb-0">
                    <v-radio-group
                      class="my-0 pb-0 pl-4"
                      v-model="questions['2']"
                      column>
                      <v-radio
                        label="Yes"
                        color="primary"
                        value="true">
                      </v-radio>
                      <v-radio
                        label="No"
                        color="primary"
                        value="false">
                      </v-radio>
                    </v-radio-group>
                  </v-card-actions>
                  <!--<v-btn
                    :dark="questions['2'] !== null"
                    color="green"
                    :disabled="!questions['2']"
                    @click="step = 3"
                    class="ml-4 mb-4">
                    Continue
                  </v-btn>
                  <v-btn
                    dark
                    color="red"
                    class="ml-4 mb-4"
                    @click="step = 1">
                    Go back
                  </v-btn>-->
                </v-card>
                <v-btn
                  :dark="questions['2'] !== null"
                  color="green"
                  :disabled="!questions['2']"
                  @click="step = 3"
                  class="ml-1 mb-1">
                  Continue
                </v-btn>
                <v-btn
                  dark
                  color="red"
                  class="ml-4 mb-1"
                  @click="step = 1">
                  Go back
                </v-btn>
              </v-stepper-content>

              <v-stepper-step
                class="py-2"
                :complete="step > 3"
                step="3"
                color="primary">
                Question 3/10
                <small></small>
              </v-stepper-step>
              <v-stepper-content
                step="3">
                <v-card
                  color="white lighten-1"
                  class="ma-1 mb-4">
                  <v-card-title class="font-weight-regular pb-0 mx-0 py-1 terciary white--text">
                    Are you developing the wrong software functions?
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions class="ml-2 pb-0">
                    <v-radio-group
                      class="my-0 pb-0 pl-4"
                      v-model="questions['3']"
                      column>
                      <v-radio
                        label="Yes"
                        color="primary"
                        value="true">
                      </v-radio>
                      <v-radio
                        label="No"
                        color="primary"
                        value="false">
                      </v-radio>
                    </v-radio-group>
                  </v-card-actions>
                </v-card>
                <v-btn
                  :dark="questions['3'] !== null"
                  color="green"
                  :disabled="!questions['3']"
                  @click="step = 4"
                  class="ml-1 mb-1">
                  Continue
                </v-btn>
                <v-btn
                  dark
                  color="red"
                  class="ml-4 mb-1"
                  @click="step = 2">
                  Go back
                </v-btn>
              </v-stepper-content>

              <v-stepper-step
                class="py-2"
                :complete="step > 4"
                step="4"
                color="primary">
                Question 4/10
                <small></small>
              </v-stepper-step>
              <v-stepper-content
                step="4">
                <v-card
                  color="white lighten-1"
                  class="ma-1 mb-4">
                  <v-card-title class="font-weight-regular pb-0 mx-0 py-1 terciary white--text">
                    Are you developing the wrong user interface?
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions class="ml-2 pb-0">
                    <v-radio-group
                      class="my-0 pb-0 pl-4"
                      v-model="questions['4']"
                      column>
                      <v-radio
                        label="Yes"
                        color="primary"
                        value="true">
                      </v-radio>
                      <v-radio
                        label="No"
                        color="primary"
                        value="false">
                      </v-radio>
                    </v-radio-group>
                  </v-card-actions>
                </v-card>
                <v-btn
                  :dark="questions['4'] !== null"
                  color="green"
                  :disabled="!questions['4']"
                  @click="step = 5"
                  class="ml-1 mb-1">
                  Continue
                </v-btn>
                <v-btn
                  dark
                  color="red"
                  class="ml-4 mb-1"
                  @click="step = 3">
                  Go back
                </v-btn>
              </v-stepper-content>

              <v-stepper-step
                class="py-2"
                :complete="step > 5"
                step="5"
                color="primary">
                Question 5/10
                <small></small>
              </v-stepper-step>
              <v-stepper-content
                step="5">
                <v-card
                  color="white lighten-1"
                  class="ma-1 mb-4">
                  <v-card-title class="font-weight-regular pb-0 mx-0 py-1 terciary white--text">
                    Are you adding features to the software that are only marginally useful?
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions class="ml-2 pb-0">
                    <v-radio-group
                      class="my-0 pb-0 pl-4"
                      v-model="questions['5']"
                      column>
                      <v-radio
                        label="Yes"
                        color="primary"
                        value="true">
                      </v-radio>
                      <v-radio
                        label="No"
                        color="primary"
                        value="false">
                      </v-radio>
                    </v-radio-group>
                  </v-card-actions>
                </v-card>
                <v-btn
                  :dark="questions['5'] !== null"
                  color="green"
                  :disabled="!questions['5']"
                  @click="step = 6"
                  class="ml-1 mb-1">
                  Continue
                </v-btn>
                <v-btn
                  dark
                  color="red"
                  class="ml-4 mb-1"
                  @click="step = 4">
                  Go back
                </v-btn>
              </v-stepper-content>

              <v-stepper-step
                class="py-2"
                :complete="step > 6"
                step="6"
                color="primary">
                Question 6/10
                <small></small>
              </v-stepper-step>
              <v-stepper-content
                step="6">
                <v-card
                  color="white lighten-1"
                  class="ma-1 mb-4">
                  <v-card-title class="font-weight-regular pb-0 mx-0 py-1 terciary white--text">
                    Do the requirements constantly keep changing?
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions class="ml-2 pb-0">
                    <v-radio-group
                      class="my-0 pb-0 pl-4"
                      v-model="questions['6']"
                      column>
                      <v-radio
                        label="Yes"
                        color="primary"
                        value="true">
                      </v-radio>
                      <v-radio
                        label="No"
                        color="primary"
                        value="false">
                      </v-radio>
                    </v-radio-group>
                  </v-card-actions>
                </v-card>
                <v-btn
                  :dark="questions['6'] !== null"
                  color="green"
                  :disabled="!questions['6']"
                  @click="step = 7"
                  class="ml-1 mb-1">
                  Continue
                </v-btn>
                <v-btn
                  dark
                  color="red"
                  class="ml-4 mb-1"
                  @click="step = 5">
                  Go back
                </v-btn>
              </v-stepper-content>

              <v-stepper-step
                class="py-2"
                :complete="step > 7"
                step="7"
                color="primary">
                Question 7/10
                <small></small>
              </v-stepper-step>
              <v-stepper-content
                step="7">
                <v-card
                  color="white lighten-1"
                  class="ma-1 mb-4">
                  <v-card-title class="font-weight-regular pb-0 mx-0 py-1 terciary white--text">
                    Are there any shortfalls in externally furnished components?
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions class="ml-2 pb-0">
                    <v-radio-group
                      class="my-0 pb-0 pl-4"
                      v-model="questions['7']"
                      column>
                      <v-radio
                        label="Yes"
                        color="primary"
                        value="true">
                      </v-radio>
                      <v-radio
                        label="No"
                        color="primary"
                        value="false">
                      </v-radio>
                    </v-radio-group>
                  </v-card-actions>
                </v-card>
                <v-btn
                  :dark="questions['7'] !== null"
                  color="green"
                  :disabled="!questions['7']"
                  @click="step = 8"
                  class="ml-1 mb-1">
                  Continue
                </v-btn>
                <v-btn
                  dark
                  color="red"
                  class="ml-4 mb-1"
                  @click="step = 6">
                  Go back
                </v-btn>
              </v-stepper-content>

              <v-stepper-step
                class="py-2"
                :complete="step > 8"
                step="8"
                color="primary">
                Question 8/10
                <small></small>
              </v-stepper-step>
              <v-stepper-content
                step="8">
                <v-card
                  color="white lighten-1"
                  class="ma-1 mb-4">
                  <v-card-title class="font-weight-regular pb-0 mx-0 py-1 terciary white--text">
                    Are there any shortfalls in externally performed tasks?
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions class="ml-2 pb-0">
                    <v-radio-group
                      class="my-0 pb-0 pl-4"
                      v-model="questions['8']"
                      column>
                      <v-radio
                        label="Yes"
                        color="primary"
                        value="true">
                      </v-radio>
                      <v-radio
                        label="No"
                        color="primary"
                        value="false">
                      </v-radio>
                    </v-radio-group>
                  </v-card-actions>
                </v-card>
                <v-btn
                  :dark="questions['8'] !== null"
                  color="green"
                  :disabled="!questions['8']"
                  @click="step = 9"
                  class="ml-1 mb-1">
                  Continue
                </v-btn>
                <v-btn
                  dark
                  color="red"
                  class="ml-4 mb-1"
                  @click="step = 7">
                  Go back
                </v-btn>
              </v-stepper-content>

              <v-stepper-step
                class="py-2"
                :complete="step > 9"
                step="9"
                color="primary">
                Question 9/10
                <small></small>
              </v-stepper-step>
              <v-stepper-content
                step="9">
                <v-card
                  color="white lighten-1"
                  class="ma-1 mb-4">
                  <v-card-title class="font-weight-regular pb-0 mx-0 py-1 terciary white--text">
                    Are there any type of real-time performance shortfalls?
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions class="ml-2 pb-0">
                    <v-radio-group
                      class="my-0 pb-0 pl-4"
                      v-model="questions['9']"
                      column>
                      <v-radio
                        label="Yes"
                        color="primary"
                        value="true">
                      </v-radio>
                      <v-radio
                        label="No"
                        color="primary"
                        value="false">
                      </v-radio>
                    </v-radio-group>
                  </v-card-actions>
                </v-card>
                <v-btn
                  :dark="questions['9'] !== null"
                  color="green"
                  :disabled="!questions['9']"
                  @click="step = 10"
                  class="ml-1 mb-1">
                  Continue
                </v-btn>
                <v-btn
                  dark
                  color="red"
                  class="ml-4 mb-1"
                  @click="step = 8">
                  Go back
                </v-btn>
              </v-stepper-content>

              <v-stepper-step
                class="py-2"
                :complete="step > 10"
                step="10"
                color="primary">
                Question 10/10
                <small></small>
              </v-stepper-step>
              <v-stepper-content
                step="10">
                <v-card
                  color="white lighten-1"
                  class="ma-1 mb-4">
                  <v-card-title class="font-weight-regular pb-0 mx-0 py-1 terciary white--text">
                    Are you straining computer-science capabilities?
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions class="ml-2 pb-0">
                    <v-radio-group
                      class="my-0 pb-0 pl-4"
                      v-model="questions['10']"
                      column>
                      <v-radio
                        label="Yes"
                        color="primary"
                        value="true">
                      </v-radio>
                      <v-radio
                        label="No"
                        color="primary"
                        value="false">
                      </v-radio>
                    </v-radio-group>
                  </v-card-actions>
                </v-card>
                <v-btn
                  :dark="questions['10'] !== null"
                  color="green"
                  :disabled="!questions['10']"
                  @click="step = 11; process_results(); showStepper = false;"
                  class="ml-1 mb-4">
                  Continue
                </v-btn>
                <v-btn
                  dark
                  color="red"
                  class="ml-4 mb-4"
                  @click="step = 9">
                  Go back
                </v-btn>
              </v-stepper-content>
            </v-stepper>
          </v-container>
        </v-card>
      </v-container>

      <v-container
        v-if="!showStepper"
        class="mb-0 pb-0">
        <v-card class="pb-4">
          <v-card-title class="ml-4">Results
            <v-spacer></v-spacer>
            <v-btn v-if="results.length > 0" color="grey" dark class="my-auto mx-2" @click="createPDF">
              Download as PDF
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-container class="ma-0 pa-0">
            <v-card
              v-if="results.length === 0"
              class="ma-0 pb-0"
              flat>
              <v-card-title class="green white--text">
                Congratulations!
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text class="font-weight-medium mt-4">
                You have no software risks!
              </v-card-text>
            </v-card>

            <v-card
              v-if="results.length !== 0"
              class="ma-0 pb-0"
              flat>
              <v-card-title class="red white--text">There are some problems to fix</v-card-title>
              <v-divider></v-divider>
              <v-card-actions>
                <v-expansion-panels
                  v-if="results.length !== 0"
                  class="px-8 my-4"
                  focusable>
                  <v-expansion-panel
                    v-for="result, i in results"
                    :key="i">
                    <v-expansion-panel-header class="font-weight-medium">
                      {{result.question}}
                      <v-spacer></v-spacer>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content
                      class="mt-2">
                      <v-simple-table dense>
                        <thead>
                          <tr>
                            <th class="text-left white--text green">
                              Solutions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="solution in result.solutions"
                            :key="solution"
                          >
                            <td>{{ solution }}</td>
                          </tr>
                        </tbody>
                      </v-simple-table>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-card-actions>
            </v-card>

            <!--<v-expansion-panels
              v-if="results.length !== 0"
              class="px-8 mt-4"
              focusable>
              <v-expansion-panel
                v-for="result, i in results"
                :key="i">
                <v-expansion-panel-header class="font-weight-medium red white--text">
                  Problem: {{result.question}}
                  <v-spacer></v-spacer>
                </v-expansion-panel-header>
                <v-expansion-panel-content
                  class="mt-2">
                  <v-simple-table dense>
                    <thead>
                      <tr>
                        <th class="text-left white--text green">
                          Solutions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="solution in result.solutions"
                        :key="solution"
                      >
                        <td>{{ solution }}</td>
                      </tr>
                    </tbody>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>-->
          </v-container>
        </v-card>
      </v-container>

    </v-col>
  </v-row>
</template>

<script>
import jsPDF from 'jspdf';
import 'jspdf-autotable';

  export default {
    name: 'QuickAudit',

    components: {
    },

    data: () => {
      return {
        showStepper: true,
        step: 1,

        questions: {
          1: "true",
          2: "true",
          3: "true",
          4: "true",
          5: "true",
          6: "true",
          7: "true",
          8: "true",
          9: "true",
          10: "true",
        },
        answers: {
          1: {
            question: "Personnel shortfalls",
            solutions: ["Staffing with top talent", "Job matching", "Teambuilding", "Morale building", "Cross-training", "Pre-scheduling key people"]
            },
          2: {
            question: "Unrealistic schedules and budgets",
            solutions: ["Detailed, multisource cost and schedule estimation", "Design to cost", "Incremental development", "Software reuse", "Requirements scrubbing"]
            },
          3: {
            question: "Developing the wrong software functions",
            solutions: ["Organizational analysis", "Mission analysis", "Ops-concept formulation", "User serveys", "Prototyping", "Early users' manuals"]
            },
          4: {
            question: "Developing the wrong user interface",
            solutions: ["Task analysis", "Prototyping", "Scenarios", "User characterization (functionality, style, workload)"]
            },
          5: {
            question: "Gold plating",
            solutions: ["Requirements scrubbing", "Prototyping", "Cost-benefit analysis", "Design to cost"]
            },
          6: {
            question: "Continuous stream of requirement changes",
            solutions: ["High change threshold", "Information hiding", "Incremental development (defer changes to later increment)"]
            },
          7: {
            question: "Shortfalls in externally furnished components",
            solutions: ["Benchmarking", "Inspections", "Reference checking", "Compatibility analysis"]
            },
          8: {
            question: "Shortfalls in externally performed tasks",
            solutions: ["Reference checking", "Pre-award audits", "Award-fee contracts", "Competitive design or prototyping", "Teambuilding"]
            },
          9: {
            question: "Real-time performance shortfalls",
            solutions: ["Simulation", "Benchmarking", "Modeling", "Prototyping", "Instrumentation", "Tuning"]
            },
          10: {
            question: "Straining computer-science capabilities",
            solutions: ["Technical analysis", "Cost-benefit analysis", "Prototyping", "Reference checking"]
            },
        },

        results: [],
      }
    },

    methods: {
      process_results() {
        for(let i=1; i<=10; i++){
          if(this.questions[i] === "true")
            this.results.push(this.answers[i]);
        }
      },

      // https://gist.github.com/ChinwalPrasad/c60b9fed53218694623b9b75af679875
      createPDF() {
        if(this.results.length > 0){
          var doc = new jsPDF();

          for(let i=0; i<this.results.length; i++){
            let rows = [];
            let columnHeader = [this.results[i].question];
            this.results[i].solutions.forEach((solution) => {
              rows.push([solution]);
            });

            if(i==0)
              doc.autoTable({head:[columnHeader], body:rows, startY:10 }); // New way of doing it
            else
              doc.autoTable({head:[columnHeader], body:rows, startY:doc.lastAutoTable['finalY'] + 20 }); // New way of doing it
            //doc.autoTable({head:[columnHeader], body:rows, startY:10 }); // New way of doing it
          }

          doc.save('quickAudit_problemsToFix' + '.pdf');
        }
      }
    }
  }
</script>
