---
layout: default
title: ""
---

<span class="anchor" id="about-me"></span>

I am a Ph.D. candidate at the Institute of Metal Forming, RWTH Aachen University, working on fatigue and fracture mechanics of metallic materials. My research combines domain knowledge, crystal plasticity simulations, microstructure-sensitive fatigue modeling, and physics-guided machine learning to understand crack initiation, fatigue crack growth, and fatigue life.

I am particularly interested in developing interpretable, physics-embedded computational frameworks for damage-tolerant design, bridging experimental observations, multiscale simulations, and data-driven models.

My academic path spans from master's work at Southwest Jiaotong University (SWJTU), supervised by <a href="https://faculty.swjtu.edu.cn/yangbing1/zh_CN/index.htm">Prof. Bing Yang</a> and <a href="https://faculty.swjtu.edu.cn/xiaoshoune/zh_CN/index.htm">Prof. Shoune Xiao</a>, to my current Ph.D. at RWTH Aachen University, supervised by <a href="https://www.ibf.rwth-aachen.de/cms/IBF/Das-Institut/Team/Das-IBF/Erweiterte-Institutsleitung/~bgbozz/Sebastian-Muenstermann/">Prof. Dr.-Ing. Sebastian Münstermann</a>. This trajectory reflects a continuous research line from fatigue crack growth modeling toward physics-guided fatigue prediction, microstructure-sensitive fatigue analysis, and neural fracture mechanics.

<span class="anchor" id="research"></span>
## Research

<div class="research-grid">

<div class="research-card">
<h3>Scientific Machine Learning for Fracture Mechanics</h3>
<p>I explore physics-embedded and analytically informed neural methods for fracture mechanics, including Kolosov–Muskhelishvili-informed neural networks, crack-tip field reconstruction, and stress-intensity factor prediction. This work aims to bridge classical fracture mechanics, analytical solutions, and modern scientific machine learning.</p>
<div class="research-tags">
<span class="chip">Fracture mechanics</span>
<span class="chip">Stress intensity factors</span>
<span class="chip">Kolosov–Muskhelishvili potentials</span>
<span class="chip">PIHNN</span>
<span class="chip">KMINN</span>
<span class="chip">Scientific machine learning</span>
</div>
<div class="research-pubs">
<strong>Representative publications</strong>
<ul>
<li><a href="https://doi.org/10.1016/j.tafmec.2026.105582">TAFM 2026</a> — transfer-learned Kolosov–Muskhelishvili informed neural networks for mixed-mode stress intensity factor prediction.</li>
<li><a href="https://doi.org/10.1016/j.ijmecsci.2026.111860">IJMS 2026</a> — variational Kolosov–Muskhelishvili network for elasticity and fracture.</li>
</ul>
</div>
</div>

<div class="research-card">
<h3>Microstructure-Sensitive Fatigue and Crystal-Plasticity Modeling</h3>
<p>I use EBSD-informed microstructural modeling and crystal plasticity finite element simulations to investigate crack initiation, microstructurally short crack growth, and fatigue-life partitioning in metallic materials. This research connects local cyclic plasticity, fatigue indicator parameters, and macroscopic fatigue performance.</p>
<div class="research-tags">
<span class="chip">EBSD</span>
<span class="chip">Crystal plasticity</span>
<span class="chip">CPFEM</span>
<span class="chip">Fatigue indicator parameters</span>
<span class="chip">Microstructurally short cracks</span>
<span class="chip">Fatigue life partition</span>
</div>
<div class="research-pubs">
<strong>Representative publication</strong>
<ul>
<li><a href="https://doi.org/10.1016/j.ijfatigue.2025.109302">IJF 2026</a> — microstructure-sensitive fatigue modeling of LZ50 steel using EBSD-informed RVE, CPFEM, FIP, crack initiation, and microstructurally short crack growth.</li>
</ul>
</div>
</div>

<div class="research-card">
<h3>Domain Knowledge-Guided Fatigue Crack Growth Modeling</h3>
<p>I have developed machine learning, symbolic regression, and interpretable modeling approaches for fatigue crack growth and short-crack behavior in metallic materials. This line of work started from stress-ratio-dependent fatigue crack growth prediction and evolved toward domain-knowledge-guided and physics-informed models for fatigue and fracture analysis.</p>
<div class="research-tags">
<span class="chip">Fatigue crack growth</span>
<span class="chip">Short cracks</span>
<span class="chip">Symbolic regression</span>
<span class="chip">Interpretable machine learning</span>
<span class="chip">Physics-informed fatigue prediction</span>
</div>
<div class="research-pubs">
<strong>Representative publications</strong>
<ul>
<li><a href="http://ysxb.csu.edu.cn/thesisDetails#10.11817/j.ysxb.1004.0609.2022-43508&lang=zh">CJNM 2023</a> — stress-ratio-dependent fatigue crack growth rate prediction.</li>
<li><a href="https://doi.org/10.1186/s10033-023-00876-8">CJME 2023</a> — symbolic regression and domain-knowledge-guided fatigue crack growth modeling.</li>
<li><a href="https://doi.org/10.1007/s12540-024-01628-6">MMI 2024</a> — interpretable machine learning for fatigue short crack growth.</li>
<li><a href="https://doi.org/10.1016/j.engfracmech.2025.111136">EFM 2025</a> — physics-informed fatigue prediction using derivative constraints rather than fixed empirical laws.</li>
</ul>
</div>
</div>

</div>

<span class="anchor" id="publications"></span>
## Publications

### Selected First-Author Publications
<div class="pub-section">

  <div class="pub-item pub-item--featured">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">IJMS</span>
      <img src="{{ '/images/2026-IJMS-Zhou.jpg' | relative_url }}" alt="Graphical abstract: Variational Kolosov-Muskhelishvili Network for Elasticity and Fracture">
    </div>
    <div class="pub-item__text">
      <div class="pub-tags">
        <span class="pub-tag">First-author</span>
        <span class="pub-tag">Fracture mechanics</span>
        <span class="pub-tag">Scientific ML</span>
      </div>
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.ijmecsci.2026.111860">A Variational Kolosov--Muskhelishvili Network for Elasticity and Fracture</a></div>
      <div class="pub-item__authors"><strong>Shuwei Zhou</strong>, Christian Häffner, Sophie Stebner, Niklas Fehlemann, Zhichao Wei, Sebastian Münstermann. <i>International Journal of Mechanical Sciences</i> (2026).<span class='show_paper_citations' data='krmnMWIAAAAJ:MXK_kJrjxJIC'></span></div>
      <p class="pub-item__highlight">Embeds Kolosov–Muskhelishvili potentials and crack-tip asymptotics into a variational neural framework for accurate 2D elasticity and fracture analysis.</p>
      <p class="pub-item__summary">Develops vKMINN, a physics-embedded network that reconstructs elastic and fracture fields while preserving analytical structure near crack tips.</p>
    </div>
  </div>

  <div class="pub-item pub-item--featured">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">IJF</span>
      <img src="{{ '/images/2025_IJF_CP_for_fatigue.jpg' | relative_url }}" alt="Graphical abstract: CPFEM-based microstructure-sensitive fatigue modeling">
    </div>
    <div class="pub-item__text">
      <div class="pub-tags">
        <span class="pub-tag">First-author</span>
        <span class="pub-tag">Crystal plasticity</span>
        <span class="pub-tag">CPFEM</span>
      </div>
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.ijfatigue.2025.109302">Microstructure-sensitive crystal plasticity and fatigue indicator modeling for LZ50 steel</a></div>
      <div class="pub-item__authors"><strong>Shuwei Zhou</strong>, Mian Huang, Christian Häffner, Sophie Stebner, Min Cai, Zhichao Wei, Bing Yang, Sebastian Münstermann. <i>International Journal of Fatigue</i> (2026).<span class='show_paper_citations' data='krmnMWIAAAAJ:UebtZRa9Y70C'></span></div>
      <p class="pub-item__highlight">Links EBSD-informed microstructure, CPFEM, fatigue indicator parameters, and microstructurally short crack growth to predict crack initiation and total fatigue life.</p>
      <p class="pub-item__summary">Establishes a multiscale framework that partitions fatigue life into initiation and propagation stages for microstructure-sensitive design.</p>
    </div>
  </div>

  <div class="pub-item pub-item--featured">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">TAFM</span>
      <img src="{{ '/images/2026_UR_KMINN.png' | relative_url }}" alt="Graphical abstract: Transfer-learned Kolosov-Muskhelishvili Informed Neural Networks for Fracture Mechanics">
    </div>
    <div class="pub-item__text">
      <div class="pub-tags">
        <span class="pub-tag">First-author</span>
        <span class="pub-tag">Fracture mechanics</span>
        <span class="pub-tag">Scientific ML</span>
      </div>
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.tafmec.2026.105582">Transfer-learned Kolosov-Muskhelishvili Informed Neural Networks for Fracture Mechanics</a></div>
      <div class="pub-item__authors"><strong>Shuwei Zhou</strong>, Christian Haeffner, Shuancheng Wang, Sophie Stebner, Zhen Liao, Bing Yang, Zhichao Wei, Sebastian Muenstermann. <i>Theoretical and Applied Fracture Mechanics</i> (2026).<span class='show_paper_citations' data='krmnMWIAAAAJ:8k81kl-MbHgC'></span></div>
      <p class="pub-item__highlight">Introduces transfer learning for KMINN to reuse pretrained fracture solutions and improve mixed-mode stress intensity factor prediction with reduced training cost.</p>
      <p class="pub-item__summary">Demonstrates how analytically informed neural networks can be transferred across fracture configurations while retaining physical consistency.</p>
    </div>
  </div>

  <div class="pub-item pub-item--featured">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">EFM</span>
      <img src="{{ '/images/2025_EFM_PINN_for_fatigue_life.jpg' | relative_url }}" alt="Graphical abstract: PINN framework for fatigue life prediction">
    </div>
    <div class="pub-item__text">
      <div class="pub-tags">
        <span class="pub-tag">First-author</span>
        <span class="pub-tag">Physics-informed ML</span>
        <span class="pub-tag">Fatigue crack growth</span>
      </div>
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.engfracmech.2025.111136">A general physics-informed neural network framework for fatigue life prediction of metallic materials</a></div>
      <div class="pub-item__authors"><strong>Shuwei Zhou</strong>, Manuel Henrich, Zhichao Wei, Feng Feng, Bing Yang, Sebastian Münstermann. <i>Engineering Fracture Mechanics</i> (2025).<span class='show_paper_citations' data='krmnMWIAAAAJ:roLk4NBRz8UC'></span></div>
      <p class="pub-item__highlight">Proposes a general PINN framework that encodes fatigue trends through derivative constraints instead of prescribing a fixed empirical law.</p>
      <p class="pub-item__summary">Enables transferable fatigue life prediction across materials and loading conditions by embedding domain knowledge as soft physical constraints.</p>
    </div>
  </div>

</div>

### Other First-Author Publications
<div class="pub-section">

  <div class="pub-item">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">MMI</span>
      <img src="{{ '/images/2024-MMI-zhou.webp' | relative_url }}" alt="Graphical abstract: Interpretable Machine Learning Method for Modelling Fatigue Short Crack Growth Behaviour">
    </div>
    <div class="pub-item__text">
      <div class="pub-tags">
        <span class="pub-tag">First-author</span>
        <span class="pub-tag">Fatigue crack growth</span>
      </div>
      <div class="pub-item__title"><a href="https://doi.org/10.1007/s12540-024-01628-6">Interpretable Machine Learning Method for Modelling Fatigue Short Crack Growth Behaviour</a></div>
      <div class="pub-item__authors"><strong>Shuwei Zhou</strong>, Bing Yang, Shoune Xiao, Guangwu Yang, Tao Zhu. <i>Metals and Materials International</i> (2024).<span class='show_paper_citations' data='krmnMWIAAAAJ:IjCSPb-OGe4C'></span></div>
      <p class="pub-item__summary">Combines predictive accuracy with interpretable machine learning to reveal how key variables govern short crack growth in aluminum alloys.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">CJME</span>
      <img src="{{ '/images/2023-CJME-Zhou.jpg' | relative_url }}" alt="Graphical abstract: Crack Growth Rate Model Derived from Domain Knowledge-Guided Symbolic Regression">
    </div>
    <div class="pub-item__text">
      <div class="pub-tags">
        <span class="pub-tag">First-author</span>
        <span class="pub-tag">Fatigue crack growth</span>
      </div>
      <div class="pub-item__title"><a href="https://doi.org/10.1186/s10033-023-00876-8">Crack Growth Rate Model Derived from Domain Knowledge-Guided Symbolic Regression</a></div>
      <div class="pub-item__authors"><strong>Shuwei Zhou</strong>, Bing Yang, Shoune Xiao, Guangwu Yang, Tao Zhu. <i>Chinese Journal of Mechanical Engineering</i> (2023).<span class='show_paper_citations' data='krmnMWIAAAAJ:9yKSN-GCB0IC'></span></div>
      <p class="pub-item__summary">Guides symbolic regression with fatigue-domain knowledge to derive an explicit and physically consistent fatigue crack growth rate equation.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">CJNM</span>
      <img src="{{ '/images/2023-youse-Zhou.png' | relative_url }}" alt="Graphical abstract: Estimating the fatigue crack growth rate of 6005A-T6 aluminum alloys with different stress ratios using machine learning methods">
    </div>
    <div class="pub-item__text">
      <div class="pub-tags">
        <span class="pub-tag">First-author</span>
        <span class="pub-tag">Fatigue crack growth</span>
      </div>
      <div class="pub-item__title"><a href="http://ysxb.csu.edu.cn/thesisDetails#10.11817/j.ysxb.1004.0609.2022-43508&lang=zh">Estimating the fatigue crack growth rate of 6005A–T6 aluminum alloys with different stress ratios using machine learning methods</a></div>
      <div class="pub-item__authors"><strong>Shuwei Zhou</strong>, Bing Yang, Chao Wang, Shuancheng Wang, Shoune Xiao, Guangwu Yang, Tao Zhu. <i>中国有色金属学报 (Chinese Journal of Nonferrous Metals)</i> (2023).<span class='show_paper_citations' data='krmnMWIAAAAJ:d1gkVwhDpl0C'></span></div>
      <p class="pub-item__summary">Benchmarks machine learning models for stress ratio-dependent fatigue crack growth rate prediction in 6005A-T6 aluminum alloy.</p>
    </div>
  </div>

</div>

### Collaborative Publications
<div class="pub-section">
  <div class="pub-item">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">IJMS</span>
      <img src="{{ '/images/2026-IJMS-wei.jpg' | relative_url }}" alt="Graphical abstract: Deep learning characterization of stress-state-dependent anisotropic ductile damage">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.ijmecsci.2026.111424">Deep learning characterization of stress-state-dependent anisotropic ductile damage</a></div>
      <div class="pub-item__authors">Zhichao Wei, Yijia Mo, <strong>Shuwei Zhou</strong>, Steffen Gerke, Sebastian Münstermann, Michael Brünig. <i>International Journal of Mechanical Sciences</i> (2026). <span class='show_paper_citations' data='krmnMWIAAAAJ:0EnyYjriUFMC'></span></div>
      <p class="pub-item__summary">Uses deep learning to characterize stress-state-dependent anisotropic ductile damage from mesoscale deformation responses.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">TWS</span>
      <img src="{{ '/images/2026-TWS-Huang.jpg' | relative_url }}" alt="Graphical abstract: Quasi-static compression energy absorption characteristics of bamboo-inspired heterogeneous hybrid structure">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.tws.2026.115160">Quasi-static compression energy absorption characteristics of bamboo-inspired heterogeneous hybrid structure with CFRP/SLM-fabricated AlSi10Mg lattice</a></div>
      <div class="pub-item__authors">Mian Huang, Bing Yang, Yining Wang, Cheng Li, <strong>Shuwei Zhou</strong>, Dongdong Chen, Shoune Xiao. <i>Thin-Walled Structures</i> (2026). <span class='show_paper_citations' data='krmnMWIAAAAJ:kNdYIx-mwKoC'></span></div>
      <p class="pub-item__summary">Reveals the compression response and energy-absorption mechanisms of a bamboo-inspired CFRP/SLM-fabricated AlSi10Mg hybrid structure.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">ESWA</span>
      <img src="{{ '/images/2025-ESWA-Feng.jpg' | relative_url }}" alt="Graphical abstract: Probabilistic fatigue life prediction in additive manufacturing materials">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.eswa.2025.127098">Probabilistic fatigue life prediction in additive manufacturing materials with a physics-informed neural network framework</a></div>
      <div class="pub-item__authors">Feng Feng, Tao Zhu, Bing Yang, Zhe Zhang, <strong>Shuwei Zhou</strong>, Shoune Xiao. <i>Expert Systems with Applications</i> (2025).<span class='show_paper_citations' data='krmnMWIAAAAJ:LkGwnXOMwfcC'></span></div>
      <p class="pub-item__summary">Integrates fatigue physics and probabilistic learning to quantify fatigue life predictions and their uncertainty in additively manufactured materials.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">MSEA</span>
      <img src="{{ '/images/2025-MSEA-WEN.jpg' | relative_url }}" alt="Graphical abstract: In-situ study of crack propagation mechanisms in wire arc additive manufactured Al-Mg alloys">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.msea.2025.147802">In-situ study of crack propagation mechanisms in wire arc additive manufactured Al-Mg alloys: Multiple strategies involving microdefects and microstructures</a></div>
      <div class="pub-item__authors">Weiying Wen, Huan Qi, Zhen Liao, Lanxin Jiang, Mian Huang, Bing Yang, Zhiwei Wu, <strong>Shuwei Zhou</strong>. <i>Materials Science and Engineering: A</i> (2025).<span class='show_paper_citations' data='krmnMWIAAAAJ:_FxGoFyzp5QC'></span></div>
      <p class="pub-item__summary">Uses in-situ observations to reveal how microdefects and microstructures govern crack propagation in wire-arc additively manufactured Al–Mg alloys.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">EFM</span>
      <img src="{{ '/images/2025-EFM-Wang.jpg' | relative_url }}" alt="Graphical abstract: Effective stress intensity factor range for fatigue cracks propagating in mixed mode I-II loading">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.engfracmech.2024.110641">Effective stress intensity factor range for fatigue cracks propagating in mixed mode I-II loading</a></div>
      <div class="pub-item__authors">Shuancheng Wang, <strong>Shuwei Zhou</strong>, Bing Yang, Shoune Xiao, Guangwu Yang, Tao Zhu. <i>Engineering Fracture Mechanics</i> (2024).<span class='show_paper_citations' data='krmnMWIAAAAJ:ufrVoPGSRksC'></span></div>
      <p class="pub-item__summary">Introduces an effective stress intensity factor range that unifies fatigue crack growth characterization under mixed mode I-II loading conditions.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">EFM</span>
      <img src="{{ '/images/2024-EFM-WANG.jpg' | relative_url }}" alt="Graphical abstract: Effect of stress ratio and overload on mixed-mode crack propagation behaviour of EA4T steel">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.engfracmech.2024.110210">Effect of stress ratio and overload on mixed-mode crack propagation behaviour of EA4T steel</a></div>
      <div class="pub-item__authors">Shuancheng Wang, Bing Yang, <strong>Shuwei Zhou</strong>, Yuanzhi Wang, Shoune Xiao. <i>Engineering Fracture Mechanics</i> (2024).<span class='show_paper_citations' data='krmnMWIAAAAJ:ufrVoPGSRksC'></span></div>
      <p class="pub-item__summary">Clarifies how stress ratio and overload alter mixed mode crack paths, growth rates, and retardation behavior in EA4T axle steel.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">CJME</span>
      <img src="{{ '/images/2024-CJME-WANG.webp' | relative_url }}" alt="Graphical abstract: Closure Effect of I + II Mixed-mode Crack for EA4T Axle Steel">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1186/s10033-024-01061-1">Closure Effect of I + II Mixed-mode Crack for EA4T Axle Steel</a></div>
      <div class="pub-item__authors">Shuancheng Wang, Bing Yang, <strong>Shuwei Zhou</strong>, Jian Li, Shoune Xiao. <i>Chinese Journal of Mechanical Engineering</i> (2024).<span class='show_paper_citations' data='krmnMWIAAAAJ:eQOLeE2rZwMC'></span></div>
      <p class="pub-item__summary">Quantifies mixed mode crack closure behavior in EA4T axle steel and its influence on effective fatigue crack growth driving forces.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">IJF</span>
      <img src="{{ '/images/2025-IJF-feng.jpg' | relative_url }}" alt="Graphical abstract: A physics-informed neural network approach for predicting fatigue life of SLM 316L stainless steel">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.ijfatigue.2024.108486">A physics-informed neural network approach for predicting fatigue life of SLM 316L stainless steel based on defect features</a></div>
      <div class="pub-item__authors">Feng Feng, Tao Zhu, Bing Yang, <strong>Shuwei Zhou</strong>, Shoune Xiao. <i>International Journal of Fatigue</i> (2024).<span class='show_paper_citations' data='krmnMWIAAAAJ:YsMSGLbcyi4C'></span></div>
      <p class="pub-item__summary">Embeds defect-sensitive fatigue relationships into a physics-informed neural network for fatigue life prediction of SLM 316L stainless steel.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">EFM</span>
      <img src="{{ '/images/2023-EFM-Wang.jpg' | relative_url }}" alt="Graphical abstract: Mixed mode crack growth behaviour considering plasticity-induced and roughness-induced closure">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.engfracmech.2023.109430">Mixed mode crack growth behaviour considering plasticity-induced and roughness-induced closure</a></div>
      <div class="pub-item__authors">Shuancheng Wang, Bing Yang, Jian Li, <strong>Shuwei Zhou</strong>, Shoune Xiao. <i>Engineering Fracture Mechanics</i> (2023).<span class='show_paper_citations' data='krmnMWIAAAAJ:qjMakFHDy7sC'></span></div>
      <p class="pub-item__summary">Explains mixed mode fatigue crack growth behavior by jointly accounting for plasticity-induced and roughness-induced crack closure.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <span class="pub-item__venue">CJME</span>
      <img src="{{ '/images/2021-CJME-Wei.jpg' | relative_url }}" alt="Graphical abstract: Optimisation Method for Determination of Crack Tip Position Based on Gauss-Newton Iterative Technique">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1186/s10033-021-00585-0">Optimisation Method for Determination of Crack Tip Position Based on Gauss-Newton Iterative Technique</a></div>
      <div class="pub-item__authors">Bing Yang, Zhanjiang Wei, Zhen Liao, <strong>Shuwei Zhou</strong>, Shoune Xiao, Tao Zhu, Guangwu Yang, Mingmeng Wang. <i>Chinese Journal of Mechanical Engineering</i> (2021).<span class='show_paper_citations' data='krmnMWIAAAAJ:2osOgNQ5qMEC'></span></div>
      <p class="pub-item__summary">Combines experimental displacement fields with Gauss–Newton iteration to accurately locate crack-tip positions.</p>
    </div>
  </div>
</div>

<span class="anchor" id="education"></span>
## Education

- *2023.10 – present*, Ph.D. candidate, Institute of Metal Forming, RWTH Aachen University, Germany.
- *2020.09 – 2023.06*, M.Sc. in Vehicle Engineering, State Key Laboratory of Rail Transit Vehicle System, Southwest Jiaotong University, China.
- *2016.09 – 2020.06*, B.Eng. in Engineering Mechanics, School of Mechanics and Aerospace Engineering, Southwest Jiaotong University, China.

<span class="anchor" id="service"></span>
## Academic Service

Ad hoc reviewer for: International Journal of Fatigue; Engineering Fracture Mechanics; Theoretical and Applied Fracture Mechanics; International Journal for Numerical Methods in Engineering; Reliability Engineering and System Safety; Expert Systems with Applications; Engineering Structures; Engineering Applications of Artificial Intelligence; Journal of Materials Research and Technology; Structural Health Monitoring; International Journal of Pressure Vessels and Piping; International Journal of Cast Metals Research; Journal of Central South University; Digital Engineering; Computers, Materials &amp; Continua; Array; 工程热物理学报 (Journal of Engineering Thermophysics).

<span class="anchor" id="contact"></span>
## Contact

Institute of Metal Forming (IBF), RWTH Aachen University, Aachen, Germany

Email: [shuwei.zhou@ibf.rwth-aachen.de](mailto:shuwei.zhou@ibf.rwth-aachen.de)

CV: [Academic CV (PDF)]({{ '/CV/Academic_CV_Shuwei_Zhou_Postdoc.pdf' | relative_url }})
