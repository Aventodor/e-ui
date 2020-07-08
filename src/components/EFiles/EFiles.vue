<template>
  <div>
    <el-table
      style="width: 100%"
      border
      :data="data"
      @row-click="rowClick"
    >
      <el-table-column
        v-for="(column, index) in columns" :key="index"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
      >
        <template slot-scope="{row}">
          <template v-if="!$utils.$isNotEmpty(column.slotName)">
            <i :class="['file-icon', getFileExtension(row[extension])]" v-if="column.showFileIcon === true"></i>
            <span class="text">{{row[column.prop]}}</span>
          </template>
          <template v-else>
            <slot :name="column.slotName"></slot>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{row}">
          <el-button type="text" icon="el-icon-view" v-if="$utils.$isNotEmpty(row[extension])" @click="viewFile(row)"></el-button>
          <el-button type="text" icon="el-icon-download" v-if="$utils.$isNotEmpty(row[extension])" @click="downloadFile(row)"></el-button>
          <el-button type="text" icon="el-icon-delete" :style="{color: '#f56c6c', ...iconStyle, ...deleteStyle}" @click="deleteFile(row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'files',
    props: {
      columns: Array, // 列
      data: Array,
      extension: {// 文件后缀
        type: String,
        default: 'extension'
      },
      deleteStyle: Object, // 删除按钮样式
      iconStyle: Object // 按钮样式
    },
    data() {
      return {
      };
    },
    methods: {
      // 点击一行
      rowClick(row, column, event) {
        this.$emit('row-click', row, column, event);
      },
      // 查看文件
      viewFile(row){
        this.$emit('view', row)
      },
      // 下载文件
      downloadFile(row){
        this.$emit('download', row)
      },
      // 删除文件
      deleteFile(row){
        this.$emit('delete', row)
      },
      // 获取文件类型
      getFileExtension(extension){
        if (!this.$utils.$isNotEmpty(extension)) {
          return extension
        }
        extension = extension.toLowerCase()
        switch (extension) {
          case 'pdf':
            return 'pdf'
          case 'jpg':
            return 'img'
          case 'png':
            return 'img'
          case 'jpeg':
            return 'img'
          case 'docx':
            return 'word'
          case 'doc':
            return 'word'
          case 'xlsx':
            return 'excel'
          case 'xls':
            return 'excel'
          case 'pptx':
            return 'ppt'
          case 'ppt':
            return 'ppt'
          default:
            return 'file'
        }
      }
    }
  };
</script>

<style scoped lang="less">
  .file-icon{
    display: inline-block;
    width: 24px;
    height: 24px;
    background-size: 100% 100%;
    vertical-align: middle;
    margin-right: 10px;
    &.pdf{
      background: url("../../assets/images/icon_pdf.png") center center;
    }
    &.excel{
      background: url("../../assets/images/icon_excel.png") center center;
    }
    &.img{
      background: url("../../assets/images/icon_img.png") center center;
    }
    &.word{
      background: url("../../assets/images/icon_word.png") center center;
    }
    &.ppt{
      background: url("../../assets/images/icon_ppt.png") center center;
    }
  }
  .text{
    display: inline-block;
    vertical-align: middle;
  }
</style>
