<template>
  <div>
    <EFiles
      :columns="columns"
      :data="data"
    >
      <template slot="name1">
        <el-button
          size="mini"
          @click="handleEdit">Edit
        </el-button>
      </template>
    </EFiles>
  </div>
</template>

<script>
  import EFiles from "../../components/EFiles/EFiles";

  export default {
    name: 'filesList',
    components: {
      EFiles
    },
    data() {
      return {
        columns: [
          {
            prop: 'name',
            label: '文件名称',
            width: '180',
            showFileIcon: true
          },
          {
            prop: 'date',
            label: '上传日期',
            width: '180',
            slotName: 'name1'
          },
          {
            prop: 'address',
            label: '描述'
          }
        ],
        data: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          extension: 'pdf'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
    methods: {
      handleEdit(scope) {
        console.log('scope', scope);
      }
    }
  };
</script>

<style scoped>

</style>
