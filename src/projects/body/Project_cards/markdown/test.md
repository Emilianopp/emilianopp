# MRNA_pipe

## This Repository belongs to the RNA Sequence Pipeline for DR.Camila de Souza's Laboratory 

<br>

### Execution 

<br>

Pipeline is Executed from Jenkins to have a history log of executed procedures:

<br>

![Alt text](https://github.com/desouzalab/MRNA_pipe/blob/Master/docs/rna_jenkins.PNG "Title")

This Jenkins job calls [main.sh](main.sh) with  the use of ssh to connect to sharcnet.

It is parameterized in order to be able to execute various tasks when desired as well as to specify desired method being worked on.

<br>

### Pipeline Structure 

<br>

![Alt text](https://github.com/desouzalab/MRNA_pipe/blob/Master/docs/Pipeline_Diagram.png "Title")

Pipeline tasks can be executed independantlly with the primary 4 in order being:

* Preprocess
* Clustering
* Visualization
* Comparison

When processing new data all pipeline tasks should be executed in sequential order.
<br>

When tuning a specific task is desired without re-execution of other procedures, desired tasks can be executed in isolation.

<br>

### Repo Structure

<br>

![Alt text](https://github.com/desouzalab/MRNA_pipe/blob/Master/docs/Repo_structure.png "Title")

<br>

The Repo follows a Classic version control structure 

<br>

Feature branches stem from Master and are merged back when all testing is complete.

<br>

This allows each method to be tested independantly without affecting exisitng output/methods

<br>