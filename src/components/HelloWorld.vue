<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ msg }}</div>
    </v-ons-toolbar>

    <p style="text-align: center">
      <v-ons-button @click="getAllRepositories">
        Get my repositories
      </v-ons-button>
      <span>
        Count: {{count}}
      </span>
    </p>
  </v-ons-page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public count: number

  constructor () {
    super()
    this.count = 0
  }

  plus (num: number) {
    this.count += num
  }

  async getAllRepositories () {
    /*
    const repositories = await this.client.query({
      query: gql`
      {
        viewer {
          repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
      `
    })
    console.log(repositories)
    */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
