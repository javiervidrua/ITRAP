<template>
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
              Nam illum ullam provident fugiat iste aliquid nobis laudantium. Sit velit nostrum similique dolorem. Et qui aliquid quis quo. Facere labore repellat blanditiis qui quo eos voluptatum ab. Aut exercitationem molestias aut commodi illum nostrum neque.
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
            class="ma-1 mb-8"
          ></v-card>
          <v-btn
            dark
            color="green"
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
            class="ma-1 mb-8"
          ></v-card>
          <v-btn
            dark
            color="green"
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
            class="ma-1 mb-8"
          ></v-card>
          <v-btn
            dark
            color="green"
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
            class="ma-1 mb-8"
          ></v-card>
          <v-btn
            dark
            color="green"
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
            class="ma-1 mb-8"
          ></v-card>
          <v-btn
            dark
            color="green"
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
            class="ma-1 mb-8"
          ></v-card>
          <v-btn
            dark
            color="green"
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
            class="ma-1 mb-8"
          ></v-card>
          <v-btn
            dark
            color="green"
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
            class="ma-1 mb-8"
          ></v-card>
          <v-btn
            dark
            color="green"
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
            class="ma-1 mb-8"
          ></v-card>
          <v-btn
            dark
            color="green"
            @click="step = 11"
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
      }
    },

    methods: {
    }
  }
</script>
