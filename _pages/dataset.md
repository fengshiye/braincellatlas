---
title: "Brain Cell Atlas - Database"
layout: textlay
excerpt: " The Databases in Brain Cell Atlas, GZNL-RDC. "
sitemap: true
permalink: /database-1/
---
<html lang="en">
<head>
<!--set sort order in table header begin-->
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <!-- <title>Ribozyme applications</title> -->
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css">

  <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
  <script type="text/javascript" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
  <!--set sort order in table header finish-->
  <!-- <style>
    .header_box {
    border: none;
    background: #efefef;
    font-size:24px
  }
  h2{
    font-size:20px;
    font-weight: bold;
  }
/* Button Container Styles */
    .button-container {
      display: flex;
      justify-content: left;
      align-items: center;
      height: 50px;
      overflow:auto
    }
    /* Button Style */
    .button {
      display: block;
      padding: 10px;
      margin-right: 10px;
      text-align: center;
      background-color: #efefef;
      color: #005826;
      text-decoration: none;
      font-size: 16px;
      border: 1px solid #005826;
      border-radius: 5px;
    }
    /* Mouse Hover Style */
    .button:hover {
      background-color: #999;
      cursor: pointer;
    }
    /* 样式表格 */
    table {
        border: 2px solid #f8f8ff;
        border: 2px solid #767676;
		    border: 2px solid #767676;
		    border-radius: 5px;
		    background-color: #fff;
		    border-radius: 0;
        }
		  th {
        background-color: #719B71;
        background-color: #719B71;
        background-color: #005826;
        color: rgba(255,255,255,0.9);
		    cursor: pointer;
        }
		  td {
		    background-color: #ffffff;
		    background-color: #f9f9f9;
		    background-color: #f9f9f9;
		    }		
		  th, td {
		  padding: 10px 10px;
		}
    /* 隐藏所有 sheet */
    .sheet {
      display: none;
      overflow:auto
    }
    /* Style the search box */
  #searchBox {
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 4px;
    width: 300px;
  }
  /* Style the search box when it has focus */
  #searchBox:focus {
    outline: none;
    border-color: #2354C4;
  }
  /* Style the placeholder text */
  #searchBox::placeholder {
    font-size: 16px;
  }
  /* 搜索框和下载框水平布局 */
    .form-container {
      display: flex;
      align-items: center;
      overflow:auto
    }
    .form-container input {
      margin-right: 10px;
    }
    /* 下载框位置设置 */
    .form-container select {
      margin-left: auto;
      padding: 10px;
      font-size: 16px;
      border: 2px solid #ccc;
      border-radius: 4px;
      width: 300px;
    }
    .button.clicked {
    background-color: #999;
}

<!--   </style> -->
</head> 

<!-- <body onload="showSheet('sheet1')"> -->
<!-- 
<p class="header_box" >Detail information</p>

        
This section lists all the experimentally validated riboswitches. -->
<div style="text-align: right;">
<input type="text" id="searchBox" placeholder="Search by keyword..." onfocus="showAllSheets()" oninput="searchTables()"><br><br>
</div>
<div>
<table id="cfttable" class="table table-hover table-bordered">
    <colgroup>
          <col style="width: 10%;">
          <col style="width: 5%;">
          <col style="width: 40%;">
          <col style="width: 10%;">
          <col style="width: 5%;">
          <col style="width: 10%;">
          <col style="width: 10%;">
          <col style="width: 5%;">
        </colgroup>
        <thead>
        <tr>
        <th onclick="sortTable(0)">Name</th>
        <th onclick="sortTable(1)">Year</th>
        <th onclick="sortTable(2)">Title</th>
        <th onclick="sortTable(3)">Accession</th>
        <th onclick="sortTable(4)">Seq-method</th>
        <th onclick="sortTable(5)">Species</th>
        <th onclick="sortTable(6)">Link</th>
      </tr>
        </thead>


    
        
   <tbody>
     <tr>
      <td name="td0">Chen <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-cell transcriptomics reveals regulators underlying immune cell diversity and immune subtypes associated with prognosis in nasopharyngeal carcinom</td>
      <td name="td3">GSE150430</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE150430" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Gong <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Comprehensive single-cell sequencing reveals the stromal dynamics and tumor-specific characteristics in the microenvironment of nasopharyngeal carcinoma</td>
      <td name="td3">GSE150825</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?&acc=GSE150825" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Song <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Cellular heterogeneity landscape in laryngeal squamous cell carcinoma</td>
      <td name="td3">GSE150321</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE150321" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Boyd <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Exuberant fibroblast activity compromises lung function via ADAMTS4</td>
      <td name="td3">PRJNA612345</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/bioproject?term=PRJNA612345&cmd=DetailsSearch" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Goldfarbmuren <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Dissecting the cellular specificity of smoking effects and reconstructing lineages in the human airway epithelium</td>
      <td name="td3">GSE134174</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE134174" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Murthy <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Human distal lung maps and lineage hierarchies reveal a bipotent progenitor</td>
      <td name="td3">GSE178360</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE178360" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Kathiriya <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Human alveolar Type 2 epithelium transdifferentiates into metaplastic KRT5+ basal cells</td>
      <td name="td3">GSE150247</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE150247" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Chan <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Signatures of plasticity, metastasis, and immunosuppression in an atlas of human small cell lung cancer</td>
      <td name="td3">https://data.humantumoratlas.org/publications/msk_sclc_chan_2021?tab=scrna-seq</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://data.humantumoratlas.org/publications/msk_sclc_chan_2021?tab=scrna-seq" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Chua <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">COVID-19 severity correlates with airway epithelium–immune cell interactions identified by single-cell analysis</td>
      <td name="td3">EGAS00001004481</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://doi.org/10.6084/m9.figshare.12436517" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Delorey <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">COVID-19 tissue atlases reveal SARS-CoV-2 pathology and cellular targets</td>
      <td name="td3">GSE171668(All,include bulk heart kidney liver lung)</td>
      <td name="td4">snRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://singlecell.broadinstitute.org/single_cell/study/SCP1052/(only lung)" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Hong <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Single-cell Study of Two Rat Models of Pulmonary Arterial Hypertension Reveals Connections to Human Pathobiology and Drug Repositioning. </td>
      <td name="td3">http://mergeomics.research.idre.ucla.edu/PVDSingleCell/CellBrowser/</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="http://mergeomics.research.idre.ucla.edu/PVDSingleCell/CellBrowser/" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Loske <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Pre-activated antiviral innate immunity in the upper airways controls early SARS-CoV-2 infection in children</td>
      <td name="td3">EGAS00001005461</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://doi.org/10.6084/m9.figshare.14938755" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Salahudeen <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Progenitor identification and SARS-CoV-2 infection in human distal lung organoids</td>
      <td name="td3">GSE106850</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE106850" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Basil <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Human distal airways contain a multipotent secretory cell that can regenerate alveoli</td>
      <td name="td3">GSE130076</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE130076" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">García <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">Novel dynamics of human mucociliary differentiation revealed by single-cell RNA sequencing of nasal epithelial cultures</td>
      <td name="td3">GSE121600</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE121600&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Jiang <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">VEGF receptor 2 (KDR) protects airways from mucus metaplasia through a Sox9 dependent pathway</td>
      <td name="td3">GSE171571</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE171571&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Ahn <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Nasal ciliated cells are primary targets for SARS-CoV-2 replication in the early stage of COVID-19</td>
      <td name="td3">GSE155113</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE155113" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Duclos <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">Characterizing smoking-induced transcriptional heterogeneity in the human bronchial epithelium at single-cell resolution</td>
      <td name="td3">GSE131391</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://ftp.ncbi.nlm.nih.gov/geo/series/GSE131nnn/GSE131391/suppl/GSE131391_cell_barcodes.txt.gz;https://ftp.ncbi.nlm.nih.gov/geo/series/GSE131nnn/GSE131391/suppl/GSE131391_count_matrix.txt.gz" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Magaletta <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Integration of single-cell transcriptomes and chromatin landscapes reveals regulatory programs driving pharyngeal organ development</td>
      <td name="td3">GSE182135;GSE182136</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE182135&format=file;https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE182136&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Zhou <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Airway basal cells show regionally distinct potential to undergo metaplastic differentiation</td>
      <td name="td3">GSE134064</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE134064&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Greaney <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Platform Effects on Regeneration by Pulmonary Basal Cells as Evaluated by Single-Cell RNA Sequencing</td>
      <td name="td3">GSE145517</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE145517&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Kiyokawa <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Airway basal stem cells reutilize the embryonic proliferation regulator, Tgfβ-Id2 axis, for tissue regeneration</td>
      <td name="td3">GSE152692</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE152692&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Kuwahara <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Delineating the early transcriptional specification of the mammalian trachea and esophagus</td>
      <td name="td3">Q6WW7FVB</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://doi.org/10.7272/Q6WW7FVB" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Lu <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Rho/SMAD/mTOR triple inhibition enables long-term expansion of human neonatal tracheal aspirate-derived airway basal cell-like cells</td>
      <td name="td3">GSE137950</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE137950" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Angelidis <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">An atlas of the aging lung mapped by single cell transcriptomics and deep tissue proteomics</td>
      <td name="td3">GSE124872</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE124872" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Cohen <i>et al.</i></td>
      <td name="td1">2018.0</td>
      <td name="td2">Lung Single-Cell Signaling Interaction Map Reveals Basophil Role in Macrophage Imprinting</td>
      <td name="td3">GSE119228</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE119228" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Zanini <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Developmental diversity and unique sensitivity to injury of lung endothelial subtypes during postnatal growth</td>
      <td name="td3">GSE159804</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE159804" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Duong <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">A single-cell regulatory map of postnatal lung alveologenesis in humans and mice</td>
      <td name="td3">GSE154027</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE154027" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Zepp <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Genomic, epigenomic, and biophysical cues controlling the emergence of the lung alveolus</td>
      <td name="td3">GSE149563</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE149563" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Georg <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Complement activation induces excessive T cell cytotoxicity in severe COVID-19</td>
      <td name="td3">GSE175450</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE175450" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Niethamer <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Defining the role of pulmonary endothelial cell heterogeneity in the response to acute lung injury</td>
      <td name="td3">GSE128944</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE128944" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wu <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Single-cell profiling of tumor heterogeneity and the microenvironment in advanced non-small cell lung cancer</td>
      <td name="td3">GSE148071</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE148071&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Ren <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">COVID-19 immune features revealed by a large-scale single-cell transcriptome atlas</td>
      <td name="td3">GSE158055</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE158055" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Melms <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">A molecular single-cell lung atlas of lethal COVID-19</td>
      <td name="td3">GSE171524</td>
      <td name="td4">snRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE171524" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Unterman <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Single-cell multi-omics reveals dyssynchrony of the innate and adaptive immune system in progressive COVID-19</td>
      <td name="td3">GSE155224</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE155224" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Silvin <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Elevated Calprotectin and Abnormal Myeloid Cell Subsets Discriminate Severe from Mild COVID-19</td>
      <td name="td3">GSE145926</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE145926" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Plasschaert <i>et al.</i></td>
      <td name="td1">2018.0</td>
      <td name="td2">A single-cell atlas of the airway epithelium reveals the CFTR-rich pulmonary ionocyte</td>
      <td name="td3">GSE102580</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE102580" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Montoro <i>et al.</i></td>
      <td name="td1">2018.0</td>
      <td name="td2">A revised airway epithelial hierarchy includes CFTR-expressing ionocytes</td>
      <td name="td3">GSE103354</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE103354" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Kim <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-cell RNA sequencing demonstrates the molecular and cellular reprogramming of metastatic lung adenocarcinoma</td>
      <td name="td3">GSE131907</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE131907" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Lim <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Organoid modeling of human fetal lung alveolar development reveals mechanisms of cell fate patterning and neonatal respiratory disease</td>
      <td name="td3">E-MTAB-11435</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://fetal-lung-organoid.cellgeni.sanger.ac.uk" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">He <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">A human fetal lung cell atlas uncovers proximal-distal gradients of differentiation and key regulators of epithelial fates</td>
      <td name="td3">E-MTAB-11278</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://fetal-lung.cellgeni.sanger.ac.uk/scRNA.html" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Arunachalam <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Systems biological assessment of immunity to mild versus severe COVID-19 infection in humans</td>
      <td name="td3">GSE155673</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE155673" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Yoshida <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Local and systemic responses to SARS-CoV-2 infection in children and adults</td>
      <td name="td3">GSE168215</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://covid19.cog.sanger.ac.uk/submissions/release2/meyer_nikolic_covid_airway_raw.h5ad" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wyler <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Bulk and single-cell gene expression profiling of SARS-CoV-2 infected human cell lines identifies molecular targets for therapeutic intervention</td>
      <td name="td3">GSE148729</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE148729" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Lukassen <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">SARS‐CoV‐2 receptor ACE2 and TMPRSS2 are primarily expressed in bronchial transient secretory cells</td>
      <td name="td3">7r2cwbw44m</td>
      <td name="td4">snRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://data.mendeley.com/datasets/7r2cwbw44m/1" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Madissoon <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">A spatially resolved atlas of the human lung characterizes a gland-associated immune niche</td>
      <td name="td3">Unclassified</td>
      <td name="td4">scRNA-seq,snRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://5locationslung.cellgeni.sanger.ac.uk/" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Miller <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">In Vitro and In Vivo Development of the Human Airway at Single-Cell Resolution</td>
      <td name="td3">E-MTAB-8221</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ebi.ac.uk/biostudies/arrayexpress/studies/E-MTAB-8221" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Szabo <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Longitudinal profiling of respiratory and systemic immune responses reveals myeloid cell-driven lung inflammation in severe COVID-19</td>
      <td name="td3">Unclassified</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.covid19cellatlas.org/index.patient.html" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Tsukui <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Collagen-producing lung cell atlas identifies multiple subsets with distinct localization and relevance to fibrosis</td>
      <td name="td3">GSE132771</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE132771" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Herriges <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Durable alveolar engraftment of PSC-derived lung epithelial cells into immunocompetent mice.</td>
      <td name="td3">GSE200886</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE200886" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Adams <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-cell RNA-seq reveals ectopic and aberrant lung-resident cell populations in idiopathic pulmonary fibrosis</td>
      <td name="td3">GSE136831</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE136831" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">He <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Single-Cell RNA Sequencing Unravels Distinct Tumor Microenvironment of Different Components of Lung Adenocarcinoma Featured as Mixed Ground-Glass Opacity</td>
      <td name="td3">GSE203360</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE203360" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Song <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">Dissecting intratumoral myeloid cell plasticity by single cell RNA-seq</td>
      <td name="td3">GSE117570</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE117570" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Dost <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Organoids Model Transcriptional Hallmarks of Oncogenic KRAS Activation in Lung Epithelial Progenitor Cells</td>
      <td name="td3">GSE149655</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE149655" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Laughney <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Regenerative lineages and immune-mediated pruning in lung cancer metastasis</td>
      <td name="td3">GSE123903</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE123903" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Kaiser <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">p53 governs an AT1 differentiation programme in lung cancer suppression.</td>
      <td name="td3">GSE231681</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE231681" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Liu <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Categorization of lung mesenchymal cells in development and fibrosis</td>
      <td name="td3">GSE156329</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE156329" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wu <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Single cell RNA sequencing unravels mechanisms underlying senescence-like phenotypes of alveolar macrophages.</td>
      <td name="td3">GSE205982</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE205982" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Valenzi <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-cell analysis reveals fibroblast heterogeneity and myofibroblasts in systemic sclerosis-associated interstitial lung disease</td>
      <td name="td3">GSE128169</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE128169" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Zhang <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Mast cell marker gene signature: prognosis and immunotherapy response prediction in lung adenocarcinoma through integrated scRNA-seq and bulk RNA-seq.</td>
      <td name="td3">GSE150938</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE150938" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Jirmo <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Single cell RNA sequencing reveals distinct clusters of Irf8-expressing pulmonary conventional dendritic cells.</td>
      <td name="td3">GSE195899</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE195899" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Fan <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Elevated Mast Cell Abundance Is Associated with Enrichment of CCR2+ Cytotoxic T Cells and Favorable Prognosis in Lung Adenocarcinoma.</td>
      <td name="td3">GSE127465</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE127465" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Li <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Heme oxygenase-1 determines the cell fate of ferroptotic death of alveolar macrophages in COPD.</td>
      <td name="td3">GSE227691</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE227691" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Pai <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Lineage tracing reveals clonal progenitors and long-term persistence of tumor-specific T cells during immune checkpoint blockade.</td>
      <td name="td3">GSE185206</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE185206" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Parimon <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">Syndecan-1 promotes lung fibrosis by regulating epithelial reprogramming through extracellular vesicles</td>
      <td name="td3">GSE131800</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE131800" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Xie <i>et al.</i></td>
      <td name="td1">2018.0</td>
      <td name="td2">Single-Cell Deconvolution of Fibroblast Heterogeneity in Mouse Pulmonary Fibrosis</td>
      <td name="td3">GSE104154</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE104154" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Liu <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">Lung regeneration by multipotent stem cells residing at the bronchioalveolar-duct junction</td>
      <td name="td3">GSE118891</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE118891" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Valenzi <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Single-nucleus chromatin accessibility identifies a critical role for TWIST1 in idiopathic pulmonary fibrosis myofibroblast activity.</td>
      <td name="td3">GSE214085</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE214085" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Glasner <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Conserved transcriptional connectivity of regulatory T cells in the tumor microenvironment informs new combination cancer therapy strategies.</td>
      <td name="td3">GSE202159</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE202159" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Lambrechts <i>et al.</i></td>
      <td name="td1">2018.0</td>
      <td name="td2">Phenotype molding of stromal cells in the lung tumor microenvironment</td>
      <td name="td3">E-MTAB-6149</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ebi.ac.uk/biostudies/arrayexpress/studies/E-MTAB-6149?query=E-MTAB-6149" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Han <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Construction of a human cell landscape at single-cell level</td>
      <td name="td3">GSE134355</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE134355" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Szabo <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">Single-cell transcriptomics of human T cells reveals tissue and activation signatures in health and disease</td>
      <td name="td3">GSE126030</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE126030" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Madissoon <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">scRNA-seq assessment of the human lung, spleen, and esophagus tissue stability after cold preservation</td>
      <td name="td3">https://prod.data.humancellatlas.org/explore/projects/c4077b3c-5c98-4d26-a614-246d12c2e5d7</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://data.humancellatlas.org/explore/projects?filter=%5B%7B%22facetName%22:%22publicationTitle%22,%22terms%22:%5B%22scRNA-seq%20assessment%20of%20the%20human%20lung,%20spleen,%20and%20esophagus%20tissue%20stability%20after%20cold%20preservation%22%5D%7D%5D" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Mould <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Airspace Macrophages and Monocytes Exist in Transcriptionally Distinct Subsets in Healthy Adults.</td>
      <td name="td3">GSE151928</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE151928" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Consortium <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">The Tabula Sapiens: A multiple-organ, single-cell transcriptomic atlas of humans.</td>
      <td name="td3">GSE201333</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE201333" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Travaglini <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">A molecular cell atlas of the human lung from single-cell RNA sequencing</td>
      <td name="td3">syn21041850</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.synapse.org/#!Synapse:syn21041850/files/" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Yu <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Comprehensive identification of fetal cis-regulatory elements in the human genome by single-cell multi-omics analysis</td>
      <td name="td3">https://figshare.com/projects/HumanProject/122983</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Madissoon <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">Lung, spleen and oesophagus tissue remains stable for scRNAseq in cold preservation</td>
      <td name="td3">HCA</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Raredon <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">Single-cell connectomic analysis of adult mammalian lungs</td>
      <td name="td3">GSE133747</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE133747" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Deprez <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">A Single-Cell Atlas of the Human Healthy Airways</td>
      <td name="td3">EGAS00001004082</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://ega-archive.org/studies/EGAS00001004082" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Okuda <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Secretory Cells Dominate Airway CFTR Expression and Function in Human Airway Superficial Epithelia.</td>
      <td name="td3">GSE160673</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE160673" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Liu <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Delineating spatiotemporal and hierarchical development of human fetal innate lymphoid cells</td>
      <td name="td3">GSE163587</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE163587" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Conchola,et.al <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Regionally distinct progenitor cells in the lower airway give rise to neuroendocrine and multiciliated cells in the developing human lung</td>
      <td name="td3">E-MTAB-8221</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ebi.ac.uk/biostudies/arrayexpress/studies/E-MTAB-8221" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Seumois <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-cell transcriptomic analysis of allergen-specific T cells in allergy and asthma</td>
      <td name="td3">GSE146170</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE146170" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Jackson <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-Cell and Population Transcriptomics Reveal Pan-epithelial Remodeling in Type 2-High Asthma</td>
      <td name="td3">GSE145013</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE145013" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Carraro <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-Cell Reconstruction of Human Basal Cell Diversity in Normal and Idiopathic Pulmonary Fibrosis Lungs</td>
      <td name="td3">GSE143706</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE143706" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Li <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">DJ-1 governs airway progenitor cell/eosinophil interactions to promote allergic inflammation</td>
      <td name="td3">GSE203079</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE203079" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Chen <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Comparable bidirectional neutrophil immune dysregulation between Kawasaki disease and severe COVID-19</td>
      <td name="td3">GSE200743</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE200743&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Conde <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Cross-tissue immune cell analysis reveals tissue-specific features in humans</td>
      <td name="td3">E-MTAB-11536</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.tissueimmunecellatlas.org/" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Engler <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Airway-Associated Macrophages in Homeostasis and Repair</td>
      <td name="td3">GSE152501</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE152501&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Braga <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">A cellular census of human lungs identifies novel cell states in health and in asthma</td>
      <td name="td3">GSE130148</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE130148" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Waise <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">An optimised tissue disaggregation and data processing pipeline for characterising fibroblast phenotypes using single-cell RNA sequencing</td>
      <td name="td3">GSE126111</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE126111" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Zuo <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Cell-specific expression of lung disease risk-related genes in the human small airway epithelium</td>
      <td name="td3">GSE123405</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE123405" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Schupp <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Integrated Single-Cell Atlas of Endothelial Cells of the Human Lung</td>
      <td name="td3">GSE164829</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE164829" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Eraslan G <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Single-nucleus cross-tissue molecular reference maps toward understanding disease gene function</td>
      <td name="td3">dbGaP: phs000424.v9</td>
      <td name="td4">snRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://data.humancellatlas.org/explore/projects/31887183-a72c-4308-9eac-c6140313f39c" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Mayr <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Integrative analysis of cell state changes in lung fibrosis with peripheral protein biomarkers</td>
      <td name="td3">nan</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://drive.google.com/uc?export=download&id=13vf6Fcy6cCJUuGvbnj5sQDhayLRq7op1" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Leader <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">lung_Leader_20211213</td>
      <td name="td3">nan</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE154826" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Ursu <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Author Correction: Massively parallel phenotyping of coding variants in cancer with Perturb-seq</td>
      <td name="td3">GSE161824</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE161824" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Jaeger <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Airway basal cells show a dedifferentiated KRT17highPhenotype and promote fibrosis in idiopathic pulmonary fibrosis</td>
      <td name="td3">GSE141939</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE141939" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Hoffmann <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Unique molecular signatures sustained in circulating monocytes and regulatory T cells in Convalescent COVID-19 patients.</td>
      <td name="td3">GSE232523</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE232523" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Consortium <i>et al.</i></td>
      <td name="td1">2018.0</td>
      <td name="td2">Single-cell transcriptomics of 20 mouse organs creates a Tabula Muris</td>
      <td name="td3">GSE109774</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE109774" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Prescott <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">A comparative study of in vitro air-liquid interface culture models of the human airway epithelium evaluating cellular heterogeneity and gene expression at single cell resolution.</td>
      <td name="td3">GSE225765</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE225765" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Hönzke <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Human lungs show limited permissiveness for SARS-CoV-2 due to scarce ACE2 levels but virus-induced expansion of inflammatory macrophages</td>
      <td name="td3">GSE198864</td>
      <td name="td4">snRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE198864" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Zhu <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Delineating the dynamic evolution from preneoplasia to invasive lung adenocarcinoma by integrating single-cell RNA sequencing and spatial transcriptomics.</td>
      <td name="td3">GSE189357, GSE189487</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE189357&format=file，https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE189487&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Guo <i>et al.</i></td>
      <td name="td1">2018.0</td>
      <td name="td2">Global characterization of T cells in non-small-cell lung cancer by single-cell sequencing</td>
      <td name="td3">GSE99254</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE99254&format=file&file=GSE99254%5FNSCLC%2ETCell%2ES11769%2Enorm%2Ecentered%2Etxt%2Egz, https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE99254&format=file&file=GSE99254%5FNSCLC%2ETCell%2ES12346%2ETPM%2Etxt%2Egz, https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE99254&format=file&file=GSE99254%5FNSCLC%2ETCell%2ES12346%2Ecount%2Etxt%2Egz" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Bibby <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Systematic single-cell pathway analysis to characterize early T&#xa0;cell activation.</td>
      <td name="td3">GSE212270</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE212270" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Sultana <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Single-cell RNA-seq analysis to identify potential biomarkers for diagnosis, and prognosis of non-small cell lung cancer by using comprehensive bioinformatics approaches.</td>
      <td name="td3">GSE127471</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE127471&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Marjanovic <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Emergence of a High-Plasticity Cell State during Lung Cancer Evolution</td>
      <td name="td3">GSE152607</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE152607&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Liu <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Tumour heterogeneity and intercellular networks of nasopharyngeal carcinoma at single cell resolution</td>
      <td name="td3">GSE162025</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE162025&format=file, https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE162025&format=file&file=GSE162025%5Ffiltered%5Fcontig%5Fannotations%5FTCR%2Ecsv%2Egz" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">He <i>et al.</i></td>
      <td name="td1">2018.0</td>
      <td name="td2">Single-cell RNA sequencing of mouse brain and lung vascular and vessel-associated cell types</td>
      <td name="td3">GSE99235</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE99235&format=file&file=GSE99235%5FLung%5Fsamples%5Fraw%5Freads%5Fcounts%5Fmatrix%2Etxt%2Egz" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Huang <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Single-cell transcriptomics highlights immunological dysregulations of monocytes in the pathobiology of COPD.</td>
      <td name="td3">GSE171541</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE171541" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Chandrasekaran <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">CXCL12 defines lung endothelial heterogeneity and promotes distal vascular growth.</td>
      <td name="td3">GSE202132</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE202132&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Verma <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">IFN-&#x3b3; transforms the transcriptomic landscape and triggers myeloid cell hyperresponsiveness to cause lethal lung injury.</td>
      <td name="td3">GSE212402</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE212402&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Smirnova <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Single-cell transcriptome mapping identifies a local, innate B cell population driving chronic rejection after lung transplantation.</td>
      <td name="td3">GSE166386</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE166386" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Zhong <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">scRNA-seq reveals ATPIF1 activity in control of T cell antitumor activity.</td>
      <td name="td3">GSE158278</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE158278&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Hoffmann <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Human alveolar progenitors generate dual lineage bronchioalveolar organoids.</td>
      <td name="td3">GSE197949</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE197949" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Heo <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">DNA methylome and single-cell transcriptome analyses reveal CDA as a potential druggable target for ALK inhibitor-resistant lung cancer therapy.</td>
      <td name="td3">GSE139388</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE139388" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Radtke <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Th2 single-cell heterogeneity and clonal distribution at distant sites in helminth-infected mice.</td>
      <td name="td3">GSE181342</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE181342" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Lee <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Immunophenotyping of COVID-19 and influenza highlights the role of type I interferons in development of severe COVID-19</td>
      <td name="td3">GSE149689</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE149689" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Guo <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-cell analysis of two severe COVID-19 patients reveals a monocyte-associated and tocilizumab-responding cytokine storm</td>
      <td name="td3">GSE150861</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE150861" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Schuurman <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Integrated single-cell analysis unveils diverging immune features of COVID-19, influenza, and other community-acquired pneumonia</td>
      <td name="td3">GSE164948</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE164948" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Thompson <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Metabolic programs define dysfunctional immune responses in severe COVID-19 patients</td>
      <td name="td3">GSE166992</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE166992&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Yu <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Mucosal-associated invariant T cell responses differ by sex in COVID-19</td>
      <td name="td3">GSE171555</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/download/?acc=GSE171555&format=file" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Syrimi <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">The immune landscape of SARS-CoV-2-associated Multisystem Inflammatory Syndrome in Children (MIS-C) from acute disease to recovery</td>
      <td name="td3">GSE183716</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE183716" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Li <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">KIR+CD8+ T cells suppress pathogenic T cells and are active in autoimmune diseases and COVID-19</td>
      <td name="td3">GSE193770</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE193770" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Sefik <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Inflammasome activation in infected macrophages drives COVID-19 pathology</td>
      <td name="td3">GSE199272</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens;Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE199272" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Caporarello <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Dysfunctional ERG signaling drives pulmonary vascular aging and persistent fibrosis.</td>
      <td name="td3">GSE187333</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE187333" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Khan <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Alveolar Basal Cells Differentiate towards Secretory Epithelial- and Aberrant Basaloid-like Cells In Vitro.</td>
      <td name="td3">GSE198153</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE198153" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Paranjapye <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Cell function and identity revealed by comparative scRNA-seq analysis in human nasal, bronchial and epididymis epithelia.</td>
      <td name="td3">GSE191061</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE191061" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Zhang <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Single-cell transcriptomic profiling of lung endothelial cells identifies dynamic inflammatory and regenerative subpopulations.</td>
      <td name="td3">GSE148499</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE148499" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Quinn <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Single-cell lineages reveal the rates, routes, and drivers of metastasis in cancer xenografts</td>
      <td name="td3">GSE161363</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE161363" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Grant <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Circuits between infected macrophages and T cells in SARS-CoV-2 pneumonia</td>
      <td name="td3">GSE155249</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE155249" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Khan <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Basal-Like Cell-Conditioned Medium Exerts Anti-Fibrotic Effects <i>In Vitro</i> and <i>In Vivo</i>.</td>
      <td name="td3">GSE145439</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE145439" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wang <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single Nucleus Multiomic Profiling Reveals Age-Dynamic Regulation of Host Genes Associated with SARS-CoV-2 Infection</td>
      <td name="td3">GSE161383</td>
      <td name="td4">snATAC-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE161383" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Li <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-Cell Transcriptome Analysis Reveals Dynamic Cell Populations and Differential Gene Expression Patterns in Control and Aneurysmal Human Aortic Tissue.</td>
      <td name="td3">GSE155468</td>
      <td name="td4">scATAC-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE155468" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">He <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-cell transcriptome profiling of an adult human cell atlas of 15 major organs.</td>
      <td name="td3">GSE159929</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE159929" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Vanderheiden <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">CCR2 Signaling Restricts SARS-CoV-2 Infection.</td>
      <td name="td3">GSE186360</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE186360" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Witkowski <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Untimely TGF&#x3b2; responses in COVID-19 limit antiviral functions of NK cells.</td>
      <td name="td3">GSE184329</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE184329" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Oliva <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Aging-related olfactory loss is associated with olfactory stem cell transcriptional alterations in humans.</td>
      <td name="td3">GSE184117</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE184117" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Lin <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Multi-Omics Data Analyses Identify B7-H3 as a Novel Prognostic Biomarker and Predict Response to Immune Checkpoint Blockade in Head and Neck Squamous Cell Carcinoma.</td>
      <td name="td3">GSE139324</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE139324" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Huggins <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Characterizing Macrophage Diversity in Metastasis-Bearing Lungs Reveals a Lipid-Associated Macrophage Subset.</td>
      <td name="td3">GSE164302</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE164302" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Gao <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">IFN-&#x3b3; is essential for alveolar macrophage-driven pulmonary inflammation in macrophage activation syndrome.</td>
      <td name="td3">GSE169325</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE169325" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Liao <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-cell landscape of bronchoalveolar immune cells in patients with COVID-19</td>
      <td name="td3">GSE145926</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE145926" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wagner <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Recruitment of highly cytotoxic CD8+ T cell receptors in mild SARS-CoV-2 infection</td>
      <td name="td3">GSE190839</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE190839" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Rigamonti <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Distinct responses of newly identified monocyte subsets to advanced gastrointestinal cancer and COVID-19.</td>
      <td name="td3">GSE213004</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE213004" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Sinha <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Dexamethasone modulates immature neutrophils and interferon programming in severe COVID-19</td>
      <td name="td3">GSE157789</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE157789" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Bost <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Deciphering the state of immune silence in fatal COVID-19 patients</td>
      <td name="td3">GSE157344</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE157344" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Lee <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Heterologous ChAdOx1-BNT162b2 vaccination in Korean cohort induces robust immune and antibody responses that includes Omicron.</td>
      <td name="td3">GSE201535</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE201535" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wang <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Landscape of Peripheral Blood Mononuclear Cells and Soluble Factors in Severe COVID-19 Patients With Pulmonary Fibrosis Development.</td>
      <td name="td3">GSE165182</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE165182" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Guo <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Single-cell transcriptomics reveal a unique memory-like NK cell subset that accumulates with ageing and correlates with disease severity in COVID-19.</td>
      <td name="td3">GSE199337</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE199337" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wang <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Identification of Distinct Immune Cell Subsets Associated With Asymptomatic Infection, Disease Severity, and Viral Persistence in COVID-19 Patients.</td>
      <td name="td3">GSE165080</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE165080" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Amrute <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Cell specific peripheral immune responses predict survival in critical COVID-19 patients.</td>
      <td name="td3">GSE192391</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE192391" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Bacher <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Low avidity T cell responses to SARS-CoV-2 in unexposed individuals and severe COVID-19</td>
      <td name="td3">GSE162086</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE162086" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Sarma <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Tracheal aspirate RNA sequencing identifies distinct immunological features of COVID-19 ARDS</td>
      <td name="td3">GSE163426</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE163426" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Mysore <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Protective heterologous T&#xa0;cell immunity in COVID-19 induced by the trivalent MMR and Tdap vaccine antigens.</td>
      <td name="td3">GSE181046</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE181046" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Vanderheiden <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">CCR2-dependent monocyte-derived cells restrict SARS-CoV-2 infection.</td>
      <td name="td3">GSE186360</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE186360" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Combes <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Global Absence and Targeting of Protective Immune States in Severe COVID-19.</td>
      <td name="td3">GSE163668</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE163668" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Ghanem <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Proteomic and Single-Cell Transcriptomic Dissection of Human Plasmacytoid Dendritic Cell Response to Influenza Virus.</td>
      <td name="td3">GSE189120</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE189120" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Linden <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Olfactory Stimulation Regulates the Birth of Neurons That Express Specific Odorant Receptors.</td>
      <td name="td3">GSE157119</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE157119" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Tan <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">The role of the NMD factor UPF3B in olfactory sensory neurons.</td>
      <td name="td3">GSE146043</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Zeppilli <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Molecular characterization of projection neuron subtypes in the mouse olfactory bulb.</td>
      <td name="td3">GSE162654</td>
      <td name="td4">snRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Choi <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Inflammatory Signals Induce AT2 Cell-Derived Damage-Associated Transient Progenitors that Mediate Alveolar Regeneration</td>
      <td name="td3">GSE144468</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Little <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Differential chromatin binding of the lung lineage transcription factor NKX2-1 resolves opposing murine alveolar cell fates in vivo.</td>
      <td name="td3">GSE158192</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE158192" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Reyfman <i>et al.</i></td>
      <td name="td1">nan</td>
      <td name="td2">Single-Cell Transcriptomic Analysis of Human Lung Provides Insights into the Pathobiology of Pulmonary Fibrosis</td>
      <td name="td3">GSE122960</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wang <i>et al.</i></td>
      <td name="td1">2018.0</td>
      <td name="td2">Expansion of hedgehog disrupts mesenchymal identity and induces emphysema phenotype</td>
      <td name="td3">GSE102592</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Lamers <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">An organoid-derived bronchioalveolar model for SARS-CoV-2 infection of human alveolar type II-like cells.</td>
      <td name="td3">GSE161934</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wang <i>et al.</i></td>
      <td name="td1">2018.0</td>
      <td name="td2">Pulmonary alveolar type I cell population consists of two distinct subtypes that differ in cell fate</td>
      <td name="td3">GSE106960</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE106960" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Schuler <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Age-determined expression of priming protease TMPRSS2 and localization of SARS-CoV-2 in lung epithelium.</td>
      <td name="td3">GSE160876</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Daniloski <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Identification of Required Host Factors for SARS-CoV-2 Infection in Human Cells.</td>
      <td name="td3">GSE159519</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Koenitzer <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Single-Nucleus RNA-Sequencing Profiling of Mouse Lung. Reduced Dissociation Bias and Improved Rare Cell-Type Detection Compared with Single-Cell RNA Sequencing.</td>
      <td name="td3">GSE145998</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Hsu <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Single-cell RNA-seq Analysis Reveals That Prenatal Arsenic Exposure Results in Long-term, Adverse Effects on Immune Gene Expression in Response to Influenza A Infection.</td>
      <td name="td3">GSE142047</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Randolph <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Genetic ancestry effects on the response to viral infection are pervasive but cell type specific.</td>
      <td name="td3">GSE162632</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">He <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-cell analysis reveals bronchoalveolar epithelial dysfunction in COVID-19 patients</td>
      <td name="td3">GSE147143</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Gao <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Human nasal wash RNA-Seq reveals distinct cell-specific innate immune responses in influenza versus SARS-CoV-2.</td>
      <td name="td3">GSE176269</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Nilsson-Payant <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">The NF-&#x3ba;B Transcriptional Footprint Is Essential for SARS-CoV-2 Replication.</td>
      <td name="td3">GSE184536</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Zhao <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Clonal expansion and activation of tissue-resident memory-like Th17 cells expressing GM-CSF in the lungs of severe COVID-19 patients</td>
      <td name="td3">GSE167118</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Fiege <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single cell resolution of SARS-CoV-2 tropism, antiviral responses, and susceptibility to therapies in primary human airway epithelium</td>
      <td name="td3">GSE157526</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Dugan <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Profiling B cell immunodominance after SARS-CoV-2 infection reveals antibody evolution to non-neutralizing viral targets.</td>
      <td name="td3">GSE171703</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="GSE171703" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Ramaswamy <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Immune dysregulation and autoreactivity correlate with disease severity in SARS-CoV-2-associated multisystem inflammatory syndrome in children.</td>
      <td name="td3">GSE166489</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wijst <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Longitudinal single-cell epitope and RNA-sequencing reveals the immunological impact of type 1 interferon autoantibodies in critical COVID-19.</td>
      <td name="td3">GSE168453</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wyler <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Transcriptomic profiling of SARS-CoV-2 infected human cell lines identifies HSP90 as target for COVID-19 therapy.</td>
      <td name="td3">GSE148729</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Caushi <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Transcriptional programs of neoantigen-specific TIL in anti-PD-1-treated lung cancers.</td>
      <td name="td3">GSE173351</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Ziegler <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">SARS-CoV-2 Receptor ACE2 Is an Interferon-Stimulated Gene in Human Airway Epithelial Cells and Is Detected in Specific Cell Subsets across Tissues.</td>
      <td name="td3">GSE148829</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://singlecell.broadinstitute.org/single_cell?scpbr=the-alexandria-project
GSE148829
https://singlecell.broadinstitute.org/single_cell?scpbr=the-alexandria-project
http://shaleklab.com/resource/covid-19-resources/
www.ordovasmontaneslab.com/covid-19-resources/" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wang <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Cell-to-Cell Variation in Defective Virus Expression and Effects on Host Responses during Influenza Virus Infection.</td>
      <td name="td3">GSE118773</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Obraztsova <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">mTORC1 activation in lung mesenchyme drives sex- and age-dependent pulmonary structure and function decline.</td>
      <td name="td3">GSE139819</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="GSE139819" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Paris <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">STAT3-BDNF-TrkB signalling promotes alveolar epithelial regeneration after lung injury.</td>
      <td name="td3">GSE132533</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="GSE132533" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Strunz <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Alveolar regeneration through a Krt8+ transitional stem cell state that persists in human lung fibrosis.</td>
      <td name="td3">GSE141259</td>
      <td name="td4">scATAC-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Little <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Transcriptional control of lung alveolar type 1 cell development and maintenance by NK homeobox 2-1.</td>
      <td name="td3">GSE129628</td>
      <td name="td4">scATAC-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Bharat <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Lung transplantation for patients with severe COVID-19.</td>
      <td name="td3">GSE158127</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Riemondy <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single cell RNA sequencing identifies TGF&#x3b2; as a key regenerative cue following LPS-induced lung injury.</td>
      <td name="td3">GSE113049</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Meckiff <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-cell transcriptomic analysis of SARS-CoV-2 reactive CD4 <sup>+</sup> T cells.</td>
      <td name="td3">GSE152522</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="GSE152522" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Ramos <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Innate Immune Response to Influenza Virus at Single-Cell Resolution in Human Epithelial Cells Revealed Paracrine Induction of Interferon Lambda 1.</td>
      <td name="td3">GSE122031</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="GSE122031" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Aran <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">Reference-based analysis of lung single-cell sequencing reveals a transitional profibrotic macrophage.</td>
      <td name="td3">GSE111664</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE111664" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Steuerman <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">Dissection of Influenza Infection In&#xa0;Vivo by Single-Cell RNA Sequencing.</td>
      <td name="td3">GSE107947</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE107947" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Russell <i>et al.</i></td>
      <td name="td1">2019.0</td>
      <td name="td2">Extreme heterogeneity of influenza virus infection in single cells.</td>
      <td name="td3">GSE108041</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE108041" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Zepp <i>et al.</i></td>
      <td name="td1">2017.0</td>
      <td name="td2">Distinct Mesenchymal Lineages and Niches Promote Epithelial Self-Renewal and Myofibrogenesis in the Lung.</td>
      <td name="td3">GSE99714</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE99714" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Fischer <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Single-cell RNA sequencing reveals ex vivo signatures of SARS-CoV-2-reactive T cells through 'reverse phenotyping'.</td>
      <td name="td3">GSE171037</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Ulrich <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Allergic airway recall responses require IL-9 from resident memory CD4<sup>+</sup> T cells.</td>
      <td name="td3">GSE190795</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE190795" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Zhu <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Single-Cell Transcriptomics Reveals Peripheral Immune Responses in Anti-Synthetase Syndrome-Associated Interstitial Lung Disease.</td>
      <td name="td3">GSE190510</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE190510" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Nguyen <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Immunophenotyping of Acute Inflammatory Exacerbations of Lung Injury Driven by Mutant Surfactant Protein-C: A Role for Inflammatory Eosinophils.</td>
      <td name="td3">GSE196657</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE196657" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Xu <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Integrative analysis of spatial transcriptome with single-cell transcriptome and single-cell epigenome in mouse lungs after immunization.</td>
      <td name="td3">GSE190225</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Nakayama <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Inflammatory molecular endotypes of nasal polyps derived from White and Japanese populations</td>
      <td name="td3">GSE179269</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Yoon <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Single-cell RNA sequencing reveals characteristics of myeloid cells in pulmonary post-acute sequelae of SARS-CoV-2.</td>
      <td name="td3">GSE235938</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Garrido-Martin <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">M1hot tumor-associated macrophages boost tissue-resident memory T cells infiltration and survival in human lung cancer</td>
      <td name="td3">GSE116948</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE116948" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Ma <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Single-cell analysis pinpoints distinct populations of cytotoxic CD4+ T cells and an IL-10+CD109+ TH2 cell population in nasal polyps</td>
      <td name="td3">GSE179292</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE179292" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wang <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Dysregulated lung stroma drives emphysema exacerbation by potentiating resident lymphocytes to suppress an epithelial stem cell reservoir</td>
      <td name="td3">GSE196638</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE196638" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Cassandras <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Gli1+ mesenchymal stromal cells form a pathological niche to promote airway progenitor metaplasia in the fibrotic lung</td>
      <td name="td3">GSE140032</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE140032" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Watanabe <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Anomalous Epithelial Variations and Ectopic Inflammatory Response in Chronic Obstructive Pulmonary Disease</td>
      <td name="td3">GSE173896</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE173896" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Ualiyeva <i>et al.</i></td>
      <td name="td1">2024.0</td>
      <td name="td2">A nasal cell atlas reveals heterogeneity of tuft cells and their role in directing olfactory stem cell proliferation</td>
      <td name="td3">GSE245074</td>
      <td name="td4">nan</td>
      <td name="td5">nan</td>
      <td name="td6"><a href="nan" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Liégeois <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">Airway Macrophages Encompass Transcriptionally and Functionally Distinct Subsets Altered by Smoking</td>
      <td name="td3">GSE183974</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE183974" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Moghbeli <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">β-Agonist exposure preferentially impacts lung macrophage cyclic AMP-related gene expression in asthma and asthma COPD overlap syndrome</td>
      <td name="td3">14782377.v1</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https： //doi.org/10.6084/m9.figshare.14782377.v1" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Li <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">Single cell RNA sequencing identifies IGFBP5 and QKI as ciliated epithelial cell genes associated with severe COPD</td>
      <td name="td3">GSE167265</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE167295" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">LaMarche <i>et al.</i></td>
      <td name="td1">2024.0</td>
      <td name="td2">An IL-4 signalling axis in bone marrow drives pro-tumorigenic myelopoiesis</td>
      <td name="td3">GSE245236</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Mus musculus</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE245236" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wimmers <i>et al.</i></td>
      <td name="td1">2021.0</td>
      <td name="td2">The single-cell epigenomic and transcriptional landscape of immunity to influenza vaccination</td>
      <td name="td3">GSE165903</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE165903" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Habermann <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-cell RNA sequencing reveals profibrotic roles of distinct epithelial and mesenchymal lineages in pulmonary fibrosis</td>
      <td name="td3">GSE135893</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE135893" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Sheih <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Clonal kinetics and single-cell transcriptional profiling of CAR-T cells in patients undergoing CD19 CAR-T immunotherapy</td>
      <td name="td3">GSE125881</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE125881" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Xu <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Persistent viral activity, cytokine storm, and lung fibrosis in a case of severe COVID-19</td>
      <td name="td3">GSE149878</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE149878" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Li <i>et al.</i></td>
      <td name="td1">2022.0</td>
      <td name="td2">ScRNA-seq expression of IFI27 and APOC2 identifies four alveolar macrophage superclusters in healthy BALF</td>
      <td name="td3">GSE193782</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE193782" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Wang <i>et al.</i></td>
      <td name="td1">2020.0</td>
      <td name="td2">Single-cell multiomic profiling of human lungs reveals cell-type-specific and age-dynamic control of SARS-CoV2 host genes</td>
      <td name="td3">GSE161381</td>
      <td name="td4">snATAC-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE161381" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Xu <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">Adaptive immune responses to SARS-CoV-2 persist in the pharyngeal lymphoid tissue of children</td>
      <td name="td3">GSE215802</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE215802" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
   <tbody>
     <tr>
      <td name="td0">Sountoulidis <i>et al.</i></td>
      <td name="td1">2023.0</td>
      <td name="td2">A topographic atlas defines developmental origins of cell heterogeneity in the human embryonic lung</td>
      <td name="td3">GSE215895</td>
      <td name="td4">scRNA-seq</td>
      <td name="td5">Homo sapiens</td>
      <td name="td6"><a href="https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE215895" target="_blank" style="color:#587B39"><b>Link</b></a></td>
    </tr>
   </tbody>
            
</table>
</div>                
<script>
  var tables = [];
    var currentSheet = 'sheet1';
     $(document).ready(function() {
    $.noConflict();
    tables.push($('#cfttable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));

    tables.push($('#rnadetable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));

    tables.push($('#rnapretable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#smtable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#eletable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));


    
    tables.push($('#amintable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#sugtable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#tboxtable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    tables.push($('#othtable').DataTable({
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    }));
    
    
    // Hide the search box for DataTables
      $('#cfttable_filter').css('display', 'none');
      $('#rnadetable_filter').css('display', 'none');
      $('#rnapretable_filter').css('display', 'none');
       $('#smtable_filter').css('display', 'none');
      $('#eletable_filter').css('display', 'none');
      $('#amintable_filter').css('display', 'none');
      $('#sugtable_filter').css('display', 'none');
      $('#tboxtable_filter').css('display', 'none');
      $('#othtable_filter').css('display', 'none');
      
      // Show the initial sheet (sheet1) and hide others
    showSheet('sheet1');
    hideAllSheetsExcept('sheet1');
  });

  function sortTable(columnIndex) {
    // TODO: Add sorting logic based on the columnIndex
  }

  

function downloadExcel() {
  var selectElement = document.getElementById('downloadOptions');
  var selectedValue = selectElement.value;

  // Check if a valid option was selected
  if (selectedValue !== '') {
    // Create a temporary link element with the download URL
    var link = document.createElement('a');
    link.href = selectedValue;
    link.download = selectedValue.split('/').pop(); // Set the filename to the last part of the URL
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  }
}
	
	
	function showSheet(sheetId) {
    // Hide the current sheet
    if (currentSheet) {
        var currentSheetElement = document.getElementById(currentSheet);
        currentSheetElement.style.display = 'none';
    }

    // Show the selected sheet
    var sheet = document.getElementById(sheetId);
    sheet.style.display = 'block';

    // Update the current sheet
    currentSheet = sheetId;

    // Get all buttons
    var buttons = document.querySelectorAll('.button');

    // Remove clicked class from all buttons
    buttons.forEach(function(btn) {
        btn.classList.remove('clicked');
    });

    // Add clicked class to the clicked button using event.target
    event.target.classList.add('clicked');
}

  function hideAllSheetsExcept(sheetId) {
    var sheets = document.getElementsByClassName('sheet');
    for (var i = 0; i < sheets.length; i++) {
      var sheet = sheets[i];
      if (sheet.id !== sheetId) {
        sheet.style.display = 'none';
      }
    }
    }

    function showAllSheets() {
      var sheets = document.getElementsByClassName('sheet');
      for (var i = 0; i < sheets.length; i++) {
        sheets[i].style.display = 'block';
      }
    }

    function searchTables() {
      var keyword = $('#searchBox').val().toLowerCase();

      tables.forEach(function(table) {
        table.search(keyword).draw();
      });
      // Filter the sheets based on search results
    filterSheets();
  }

  function filterSheets() {
    var keyword = $('#searchBox').val().toLowerCase();
    var sheets = document.getElementsByClassName('sheet');

    for (var i = 0; i < sheets.length; i++) {
      var sheet = sheets[i];
      var table = tables[i];

      var displaySheet = false;

      table.rows().eq(0).each(function(index) {
        var row = table.row(index);
        var rowData = row.data().join(' ').toLowerCase();
        var display = rowData.includes(keyword) ? '' : 'none';
        row.nodes().to$().css('display', display);

        if (display !== 'none') {
          displaySheet = true;
        }
      });

      if (displaySheet) {
        $('#' + sheet.id).show();
      } else {
        $('#' + sheet.id).hide();
      }
    }
  }  
  </script>   
    