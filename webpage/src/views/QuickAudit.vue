<template>
  <v-container>
    <v-row
      justify="center">
      <v-col cols="8">
        <v-stepper
          v-model="step"
          vertical
          class="ma-8"
          v-if="showStepper"
        >
          
          <v-stepper-step
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
              class="ma-1 mb-8">
              <v-card-title class="font-weight-regular pb-0">
                Are there any type of personnel shortfalls?
              </v-card-title>
              <v-card-actions class="ml-2 pt-0">
                <v-radio-group
                  v-model="question1"
                  column>
                  <v-radio
                    label="True"
                    color="primary"
                    value="true">
                  </v-radio>
                  <v-radio
                    label="False"
                    color="primary"
                    value="false">
                  </v-radio>
                </v-radio-group>
              </v-card-actions>
            </v-card>
            <!-- WHEN COPY-PASTING BE CAREFUL AND MAKE SURE YOU CHANGE question1 TO questionX, ABOVE AND BELOW -->
            <v-btn
              :dark="question1 !== null"
              color="green"
              :disabled="!question1"
              @click="step = 2"
              class="ml-1">
              Continue
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
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
              class="ma-1 mb-8">
              <v-card-title class="font-weight-regular pb-0">
                Are you using unrealistic schedules and/or budgets?
              </v-card-title>
              <v-card-actions class="ml-2 pt-0">
                <v-radio-group
                  v-model="question2"
                  column>
                  <v-radio
                    label="True"
                    color="primary"
                    value="true">
                  </v-radio>
                  <v-radio
                    label="False"
                    color="primary"
                    value="false">
                  </v-radio>
                </v-radio-group>
              </v-card-actions>
            </v-card>
            <v-btn
              :dark="question2 !== null"
              color="green"
              :disabled="!question2"
              @click="step = 3"
              class="ml-1">
              Continue
            </v-btn>
            <v-btn
              dark
              color="red"
              class="ml-4"
              @click="step = 1">
              Go back
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
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
              class="ma-1 mb-8">
              <v-card-title class="font-weight-regular pb-0">
                Are you developing the wrong software functions?
              </v-card-title>
              <v-card-actions class="ml-2 pt-0">
                <v-radio-group
                  v-model="question3"
                  column>
                  <v-radio
                    label="True"
                    color="primary"
                    value="true">
                  </v-radio>
                  <v-radio
                    label="False"
                    color="primary"
                    value="false">
                  </v-radio>
                </v-radio-group>
              </v-card-actions>
            </v-card>
            <v-btn
              :dark="question3 !== null"
              color="green"
              :disabled="!question3"
              @click="step = 4"
              class="ml-1">
              Continue
            </v-btn>
            <v-btn
              dark
              color="red"
              class="ml-4"
              @click="step = 2">
              Go back
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
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
              class="ma-1 mb-8">
              <v-card-title class="font-weight-regular pb-0">
                Are you developing the wrong user interface?
              </v-card-title>
              <v-card-actions class="ml-2 pt-0">
                <v-radio-group
                  v-model="question4"
                  column>
                  <v-radio
                    label="True"
                    color="primary"
                    value="true">
                  </v-radio>
                  <v-radio
                    label="False"
                    color="primary"
                    value="false">
                  </v-radio>
                </v-radio-group>
              </v-card-actions>
            </v-card>
            <v-btn
              :dark="question4 !== null"
              color="green"
              :disabled="!question4"
              @click="step = 5"
              class="ml-1">
              Continue
            </v-btn>
            <v-btn
              dark
              color="red"
              class="ml-4"
              @click="step = 3">
              Go back
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
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
              class="ma-1 mb-8">
              <v-card-title class="font-weight-regular pb-0">
                Are you adding features to the software that are only marginally useful?
              </v-card-title>
              <v-card-actions class="ml-2 pt-0">
                <v-radio-group
                  v-model="question5"
                  column>
                  <v-radio
                    label="True"
                    color="primary"
                    value="true">
                  </v-radio>
                  <v-radio
                    label="False"
                    color="primary"
                    value="false">
                  </v-radio>
                </v-radio-group>
              </v-card-actions>
            </v-card>
            <v-btn
              :dark="question5 !== null"
              color="green"
              :disabled="!question5"
              @click="step = 6"
              class="ml-1">
              Continue
            </v-btn>
            <v-btn
              dark
              color="red"
              class="ml-4"
              @click="step = 4">
              Go back
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
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
              class="ma-1 mb-8">
              <v-card-title class="font-weight-regular pb-0">
                Do the requirements constantly keep changing?
              </v-card-title>
              <v-card-actions class="ml-2 pt-0">
                <v-radio-group
                  v-model="question6"
                  column>
                  <v-radio
                    label="True"
                    color="primary"
                    value="true">
                  </v-radio>
                  <v-radio
                    label="False"
                    color="primary"
                    value="false">
                  </v-radio>
                </v-radio-group>
              </v-card-actions>
            </v-card>
            <v-btn
              :dark="question6 !== null"
              color="green"
              :disabled="!question6"
              @click="step = 7"
              class="ml-1">
              Continue
            </v-btn>
            <v-btn
              dark
              color="red"
              class="ml-4"
              @click="step = 5">
              Go back
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
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
              class="ma-1 mb-8">
              <v-card-title class="font-weight-regular pb-0">
                Are there any shortfalls in externally furnished components?
              </v-card-title>
              <v-card-actions class="ml-2 pt-0">
                <v-radio-group
                  v-model="question7"
                  column>
                  <v-radio
                    label="True"
                    color="primary"
                    value="true">
                  </v-radio>
                  <v-radio
                    label="False"
                    color="primary"
                    value="false">
                  </v-radio>
                </v-radio-group>
              </v-card-actions>
            </v-card>
            <v-btn
              :dark="question7 !== null"
              color="green"
              :disabled="!question7"
              @click="step = 8"
              class="ml-1">
              Continue
            </v-btn>
            <v-btn
              dark
              color="red"
              class="ml-4"
              @click="step = 6">
              Go back
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
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
              class="ma-1 mb-8">
              <v-card-title class="font-weight-regular pb-0">
                Are there any shortfalls in externally performed tasks?
              </v-card-title>
              <v-card-actions class="ml-2 pt-0">
                <v-radio-group
                  v-model="question8"
                  column>
                  <v-radio
                    label="True"
                    color="primary"
                    value="true">
                  </v-radio>
                  <v-radio
                    label="False"
                    color="primary"
                    value="false">
                  </v-radio>
                </v-radio-group>
              </v-card-actions>
            </v-card>
            <v-btn
              :dark="question8 !== null"
              color="green"
              :disabled="!question8"
              @click="step = 9"
              class="ml-1">
              Continue
            </v-btn>
            <v-btn
              dark
              color="red"
              class="ml-4"
              @click="step = 7">
              Go back
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
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
              class="ma-1 mb-8">
              <v-card-title class="font-weight-regular pb-0">
                Are there any type of real-time performance shortfalls?
              </v-card-title>
              <v-card-actions class="ml-2 pt-0">
                <v-radio-group
                  v-model="question9"
                  column>
                  <v-radio
                    label="True"
                    color="primary"
                    value="true">
                  </v-radio>
                  <v-radio
                    label="False"
                    color="primary"
                    value="false">
                  </v-radio>
                </v-radio-group>
              </v-card-actions>
            </v-card>
            <v-btn
              :dark="question9 !== null"
              color="green"
              :disabled="!question9"
              @click="step = 10"
              class="ml-1">
              Continue
            </v-btn>
            <v-btn
              dark
              color="red"
              class="ml-4"
              @click="step = 8">
              Go back
            </v-btn>
          </v-stepper-content>

          <v-stepper-step
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
              class="ma-1 mb-8">
              <v-card-title class="font-weight-regular pb-0">
                Are you straining computer-science capabilities?
              </v-card-title>
              <v-card-actions class="ml-2 pt-0">
                <v-radio-group
                  v-model="question10"
                  column>
                  <v-radio
                    label="True"
                    color="primary"
                    value="true">
                  </v-radio>
                  <v-radio
                    label="False"
                    color="primary"
                    value="false">
                  </v-radio>
                </v-radio-group>
              </v-card-actions>
            </v-card>
            <v-btn
              :dark="question10 !== null"
              color="green"
              :disabled="!question10"
              @click="step = 11; showStepper = false"
              class="ml-1">
              Continue
            </v-btn>
            <v-btn
              dark
              color="red"
              class="ml-4"
              @click="step = 9">
              Go back
            </v-btn>
          </v-stepper-content>

        </v-stepper>

      </v-col>
    </v-row>

    <v-row
      justify="center">
      <v-col cols="8">
        <!-- Now show te results -->
        <v-expansion-panels
          class="px-8"
          v-if="!showStepper"
          focusable>
          <v-expansion-panel
            v-for="(item,i) in 5"
            :key="i">
            <v-expansion-panel-header>
              Nombre del problema
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Soluciones
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'QuickAudit',

    components: {
    },

    data: () => {
      return {
        showStepper: true,
        step: 1,

        question1: null,
        question2: null,
        question3: null,
        question4: null,
        question5: null,
        question6: null,
        question7: null,
        question8: null,
        question9: null,
        question10: null,

        answers: {
          1: ["Staffing with top talent", "Job matching", "Teambuilding", "Morale building", "Cross-training", "Pre-scheduling kay people"],
          2: ["Detailed, multisource cost and schedule estimation", "Design to cost", "Incremental development", "Software reuse", "Requirements scrubbing"],
          3: ["Organizational analysis", "Mission analysis", "Ops-concept formulation", "User serveys", "Prototyping", "Early users' manuals"],
          4: ["Task analysis", "Prototyping", "Scenarios", "User characterization (functionality, style, workload)"],
          5: ["Requirements scrubbing", "Prototyping", "Cost-benefit analysis", "Design to cost"],
          6: ["High change threshhold", "Information hiding", "Incremental development (defer changes to later increment)"],
          7: ["Benchmarking", "Inspections", "Reference checking", "Compatibility analysis"],
          8: ["Reference checking", "Pre-award audits", "Award-fee contracts", "Competitive design or prototyping", "Teambuilding"],
          9: ["Simulation", "Benchmarking", "Modeling", "Prototyping", "Instrumentation", "Tuning"],
          10: ["Technical analysis", "Cost-benefit analysis", "Prototyping", "Reference checking"]
        }
      }
    },

    methods: {
    }
  }
</script>
