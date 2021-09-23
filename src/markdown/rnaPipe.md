# MRNA_pipe

[View in Github Repository](https://github.com/desouzalab/MRNA_pipe)

## This Repository belongs to the RNA Sequence Pipeline for DR.Camila de Souza's Laboratory 

## This Pipeline follows the following sequential structure 
![png](https://github.com/desouzalab/MRNA_pipe/blob/implement/images/rna_pipe_diagram.png?raw=true)

## Installation
To make use of this Pipeline and it's functionalities please install the latest version of [Anaconda](https://www.anaconda.com/)

Set up Anaconda Enviroment 

`conda install -c conda-forge mamba`


`mamba create -c conda-forge -c bioconda -n rnaPipeline snakemake `

`conda activate rnaPipeline`

Install Backspin 

`conda install -c bioconda backspinpy`

Install [Giniclust](https://github.com/lanjiangboston/GiniClust) and edit the path in /rnaPipe/giniclust.R to the corresponding Giniclust directory 

Install rnaPipe package

`CMD R build rnaPipeline`

`CMD INSTALL rnaPipeline`

## Execution 

run `cd /Snakemake/<PROCESS TO RUN>`

Then execute the desired process with 

`snakemake --configfile config.yaml -c1 `

## Outputs

All outputs are generated to the /output directory

Updating any output or software path can be done within the config.yaml files for each procedure

## Example of Analysis Produced 
![png](https://github.com/desouzalab/MRNA_pipe/blob/Master/images/Webp.net-resizeimage.png?raw=true)