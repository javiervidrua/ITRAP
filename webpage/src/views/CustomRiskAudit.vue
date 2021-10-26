<template>
  <v-container>
    <v-data-table
      red="table"
      :headers="headers"
      :items="risks"
      :sort-by="['probability', 'consequences']"
      :sort-desc="[true, true]"
      :items-per-page="-1"
      no-data-text="There are no risks on the table"
      no-results-text="There are no risks on the table"
      class="elevation-1">
      
      <template v-slot:top>
        <v-toolbar flat>
          
          <v-toolbar-title>Risk management</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="grey" dark class="mb-2 mx-2" @click="createPDF">
                Download as PDF
              </v-btn>
              <v-btn color="red" dark class="mb-2 mx-2" @click="dialogEmpty=true">
                Empty the table
              </v-btn>
              <v-btn color="green" dark class="mb-2" v-bind="attrs" v-on="on">
                New risk
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
              <v-divider></v-divider>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-model="editedItem.name"
                        label="Risk name"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <!--<v-text-field
                        v-model="editedItem.category"
                        label="Category"
                      ></v-text-field>-->
                      <v-select
                        v-model="editedItem.category"
                        :items="categories"
                        label="Category"
                        solo
                      ></v-select>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12" sm="6">
                      <!--<v-text-field
                        v-model="editedItem.probability"
                        label="Probability"
                      ></v-text-field>-->
                      <v-select
                        v-model="editedItem.probability"
                        :items="probabilities"
                        label="Probability"
                        solo
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <!--<v-text-field
                        v-model="editedItem.consequences"
                        label="Consequences"
                      ></v-text-field>-->
                      <v-select
                        v-model="editedItem.consequences"
                        :items="consequences"
                        label="Consequences"
                        solo
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green" dark @click="save">
                  Save
                </v-btn>
                <v-btn color="red" dark @click="close">
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this risk?</v-card-title
              >
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green" dark @click="deleteItemConfirm">OK</v-btn>
                <v-btn color="red" dark @click="closeDelete">Cancel</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogEmpty" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to empty the table?</v-card-title
              >
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green" dark @click="risks=[]; dialogEmpty=false">OK</v-btn>
                <v-btn color="red" dark @click="dialogEmpty=false">Cancel</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>

        </v-toolbar>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>

      <template v-slot:no-data>
        <v-btn
          color="grey"
          dark
          @click="risks = demoRisks">
          Fill with demo data
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import jsPDF from 'jspdf';
import 'jspdf-autotable';
// Save to localstorage: localStorage.setItem("key", "value");
// Load from localstorage: localStorage.getItem("key");

export default {
  name: "CustomRiskAudit",

  components: {},

  data() {
    return {
      dialog: false,
      dialogDelete: false,
      dialogEmpty: false,
      headers: [
        {
          text: "Risk",
          align: "start",
          sortable: true,
          value: "name",
        },
        { text: "Category", value: "category" },
        { text: "Probability (1-5)", value: "probability" },
        { text: "Consequences (1-5)", value: "consequences" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      risks: [],
      demoRisks: [
        {
          name: "The client will change the requirements",
          category: "Project size",
          probability: "2",
          consequences: "3",
        },
        {
          name: "There are shortfalls in technical knowledge",
          category: "Consequences to the organization",
          probability: "4",
          consequences: "5",
        },
        {
          name: "The client is erratic",
          category: "Type of client",
          probability: "5",
          consequences: "1",
        },
        {
          name: "Old computer may explode",
          category: "Production process",
          probability: "1",
          consequences: "3",
        },
        {
          name: "Another risk",
          category: "Development environment",
          probability: "2",
          consequences: "1",
        },
        {
          name: "Yet another risk",
          category: "Technology",
          probability: "3",
          consequences: "3",
        },
        {
          name: "Yet another risk more",
          category: "Team experience",
          probability: "4",
          consequences: "2",
        },
      ],

      categories: [ 'Project size',
        'Consequences to the organization',
        'Type of client',
        'Production process',
        'Development environment',
        'Technology',
        'Team experience'],

      probabilities: ['1','2','3','4','5'],

      consequences: ['1','2','3','4','5'],


      editedIndex: -1,
      editedItem: {
        name: "",
        category: "",
        probability: "",
        consequences: "",
      },
      defaultItem: {
        name: "",
        category: "",
        probability: "",
        consequences: "",
      },
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New risk" : "Edit risk";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    // Whenever the variable risks changes
    risks: function () {
      // Store to localStorage
      localStorage.setItem("risks", JSON.stringify(this.risks));
    },
  },

  // When the webapp is created
  created() {
    // Load from localStorage
    if(localStorage.risks != "null")
      this.risks = JSON.parse(localStorage.getItem("risks"));
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.risks.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.risks.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.risks.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.risks[this.editedIndex], this.editedItem);
      } else {
        this.risks.push(this.editedItem);
      }
      this.close();
      
      // Store to localStorage
      localStorage.setItem("risks", JSON.stringify(this.risks));
    },

    // https://gist.github.com/ChinwalPrasad/c60b9fed53218694623b9b75af679875
    createPDF() {
      //var source =  this.$refs["table"];
      let rows = [];
      let columnHeader = ['Name', 'Category', 'Probability (1-5)', 'Consequences (1-5)'];
      this.risks.forEach(element => {
        var temp = [
          element.name,
          element.category,
          element.probability,
          element.consequences,
        ];
        rows.push(temp);
      });
      var doc = new jsPDF();
      //doc.autoTable(columnHeader, rows, { startY: 10 }); // Deprecated
      // https://openbase.com/js/jspdf-autotable/documentation
      doc.autoTable({head:[columnHeader], body:rows, startY:10 }); // New way of doing it
      //doc.autoTable({head:[columnHeader], body:rows, html:source, startY:doc.lastAutoTable.finalY + 20 }); // New way of doing it
      doc.save("customRiskAudit" + '.pdf');
    }
  },
};
</script>
