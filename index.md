---
layout: default
title: ""
---

<span class="anchor" id="about-me"></span>
Hi, my name is Shuwei Zhou. I am a Ph.D. candidate at the Institute of Metal Forming (IBF), RWTH Aachen University (2023.10–present), supervised by <a href="https://www.ibf.rwth-aachen.de/cms/IBF/Das-Institut/Team/Das-IBF/Erweiterte-Institutsleitung/~bgbozz/Sebastian-Muenstermann/">Prof. Dr.-Ing. Sebastian Münstermann</a>.
My research focuses on fatigue and fracture mechanics, with an emphasis on integrating machine learning and multiscale modeling for damage-tolerant design.

I received my master's degree in Vehicle Engineering from the State Key Laboratory of Rail Transit Vehicle System, Southwest Jiaotong University (SWJTU), supervised by <a href="https://faculty.swjtu.edu.cn/yangbing1/zh_CN/index.htm">Prof. Bing Yang</a> and <a href="https://faculty.swjtu.edu.cn/xiaoshoune/zh_CN/index.htm">Prof. Shoune Xiao</a> (2020–2023).
I earned my bachelor’s degree in Engineering Mechanics from the School of Mechanics and Aerospace Engineering, SWJTU (2016–2020).

My current research covers two major directions in damage-tolerant fatigue and fracture analysis:

1. **Physics-embedded Machine Learning for Fatigue and Fracture**

   I incorporate physical information and domain knowledge into machine learning models to accurately predict crack initiation, crack propagation, and fatigue life. Representative works have been published in

   <a href="https://doi.org/10.1016/j.tafmec.2026.105582">Theoretical and Applied Fracture Mechanics</a>
   
   <a href="https://doi.org/10.1016/j.engfracmech.2025.111136">Engineering Fracture Mechanics</a>

   <a href="https://link.springer.com/article/10.1007/s12540-024-01628-6">Metals and Materials International</a>

   <a href="https://link.springer.com/article/10.1186/s10033-023-00876-8">Chinese Journal of Mechanical Engineering</a>

   <a href="http://ysxb.csu.edu.cn/thesisDetails#10.11817/j.ysxb.1004.0609.2022-43508&lang=zh">中国有色金属学报 (Chinese Journal of Nonferrous Metals)</a>

2. **Crystal Plasticity Finite Element Method (CPFEM)**

   I employ CPFEM to systematically investigate microstructure-sensitive fatigue crack initiation and growth in metallic materials. Representative work has been published in

   <a href="https://doi.org/10.1016/j.ijfatigue.2025.109302">International Journal of Fatigue</a>

I am aiming to integrate these two research directions to develop data-driven multiscale frameworks for understanding and predicting fatigue behavior.

<span class="anchor" id="publications"></span>
## Publications

### First-Author Publications
<div class="pub-section">
  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2026-IJMS-Zhou.jpg' | relative_url }}" alt="Graphical abstract: Variational Kolosov-Muskhelishvili Network for Elasticity and Fracture">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://arxiv.org/abs/2605.02310">A Variational Kolosov--Muskhelishvili Network for Elasticity and Fracture</a></div>
      <div class="pub-item__authors"><strong>Shuwei Zhou</strong>, Christian Häffner, Sophie Stebner, Niklas Fehlemann, Zhichao Wei, Sebastian Münstermann. <i>International Journal of Mechanical Sciences</i> (2026).</div>
      <p class="pub-item__summary">We develop a variational Kolosov-Muskhelishvili informed neural network for 2D linear elastic fracture analysis with energy-based training and embedded crack-tip singularities.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2025_IJF_CP_for_fatigue.jpg' | relative_url }}" alt="Graphical abstract: CPFEM-based microstructure-sensitive fatigue modeling">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.ijfatigue.2025.109302">Microstructure-sensitive crystal plasticity and fatigue indicator modeling for LZ50 steel</a></div>
      <div class="pub-item__authors"><strong>Shuwei Zhou</strong>, Mian Huang, Christian Häffner, Sophie Stebner, Min Cai, Zhichao Wei, Bing Yang, Sebastian Münstermann. <i>International Journal of Fatigue</i> (2026).<span class='show_paper_citations' data='krmnMWIAAAAJ:UebtZRa9Y70C'></span></div>
      <p class="pub-item__summary">We combine crystal plasticity finite element modeling with fatigue indicator parameters to predict microstructure-sensitive crack initiation sites in LZ50 steel.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2026_UR_KMINN.png' | relative_url }}" alt="Graphical abstract: Transfer-learned Kolosov-Muskhelishvili Informed Neural Networks for Fracture Mechanics">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.tafmec.2026.105582">Transfer-learned Kolosov-Muskhelishvili Informed Neural Networks for Fracture Mechanics</a></div>
      <div class="pub-item__authors"><strong>Shuwei Zhou</strong>, Christian Haeffner, Shuancheng Wang, Sophie Stebner, Zhen Liao, Bing Yang, Zhichao Wei, Sebastian Muenstermann. <i>Theoretical and Applied Fracture Mechanics</i> (2026).<span class='show_paper_citations' data='krmnMWIAAAAJ:x8xNhFhA0eEC'></span></div>
      <p class="pub-item__summary">We propose transfer-learned KM-INNs that reuse pre-trained fracture solutions to accelerate and improve mixed-mode stress intensity factor prediction.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2025_EFM_PINN_for_fatigue_life.jpg' | relative_url }}" alt="Graphical abstract: PINN framework for fatigue life prediction">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.engfracmech.2025.111136">A general physics-informed neural network framework for fatigue life prediction of metallic materials</a></div>
      <div class="pub-item__authors"><strong>Shuwei Zhou</strong>, Manuel Henrich, Zhichao Wei, Feng Feng, Bing Yang, Sebastian Münstermann. <i>Engineering Fracture Mechanics</i> (2025).<span class='show_paper_citations' data='krmnMWIAAAAJ:roLk4NBRz8UC'></span></div>
      <p class="pub-item__summary">We present a modular PINN framework that integrates Paris-law physics with SN/data-driven inputs for metallic fatigue life prediction.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2024-MMI-zhou.webp' | relative_url }}" alt="Graphical abstract: Interpretable Machine Learning Method for Modelling Fatigue Short Crack Growth Behaviour">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1007/s12540-024-01628-6">Interpretable Machine Learning Method for Modelling Fatigue Short Crack Growth Behaviour</a></div>
      <div class="pub-item__authors"><strong>Shuwei Zhou</strong>, Bing Yang, Shoune Xiao, Guangwu Yang, Tao Zhu. <i>Metals and Materials International</i> (2024).<span class='show_paper_citations' data='krmnMWIAAAAJ:IjCSPb-OGe4C'></span></div>
      <p class="pub-item__summary">We build an interpretable machine learning model to capture short-crack growth mechanisms and predict crack growth rates in aluminum alloys.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2023-CJME-Zhou.jpg' | relative_url }}" alt="Graphical abstract: Crack Growth Rate Model Derived from Domain Knowledge-Guided Symbolic Regression">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1186/s10033-023-00876-8">Crack Growth Rate Model Derived from Domain Knowledge-Guided Symbolic Regression</a></div>
      <div class="pub-item__authors"><strong>Shuwei Zhou</strong>, Bing Yang, Shoune Xiao, Guangwu Yang, Tao Zhu. <i>Chinese Journal of Mechanical Engineering</i> (2023).<span class='show_paper_citations' data='krmnMWIAAAAJ:9yKSN-GCB0IC'></span></div>
      <p class="pub-item__summary">We derive an explicit crack growth rate equation by guiding symbolic regression with fatigue domain knowledge.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2023-youse-Zhou.png' | relative_url }}" alt="Graphical abstract: Estimating the fatigue crack growth rate of 6005A-T6 aluminum alloys with different stress ratios using machine learning methods">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="http://ysxb.csu.edu.cn/thesisDetails#10.11817/j.ysxb.1004.0609.2022-43508&lang=zh">Estimating the fatigue crack growth rate of 6005A–T6 aluminum alloys with different stress ratios using machine learning methods</a></div>
      <div class="pub-item__authors"><strong>Shuwei Zhou</strong>, Bing Yang, Chao Wang, Shuancheng Wang, Shoune Xiao, Guangwu Yang, Tao Zhu. <i>中国有色金属学报 (Chinese Journal of Nonferrous Metals)</i> (2023).<span class='show_paper_citations' data='krmnMWIAAAAJ:d1gkVwhDpl0C'></span></div>
      <p class="pub-item__summary">We compare machine learning methods to predict stress-ratio-dependent fatigue crack growth rates in 6005A-T6 aluminum alloy.</p>
    </div>
  </div>
</div>

### Collaborative Publications
<div class="pub-section">
  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2026-IJMS-wei.jpg' | relative_url }}" alt="Graphical abstract: Deep learning characterization of stress-state-dependent anisotropic ductile damage">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.ijmecsci.2026.111424">Deep learning characterization of stress-state-dependent anisotropic ductile damage</a></div>
      <div class="pub-item__authors"><strong>Zhichao Wei</strong>, Yijia Mo, <strong>Shuwei Zhou</strong>, Steffen Gerke, Sebastian Münstermann, Michael Brünig. <i>International Journal of Mechanical Sciences</i> (2026).</div>
      <p class="pub-item__summary">We use deep learning to characterize stress-state-dependent anisotropic ductile damage from mesoscale deformation data.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2026-TWS-Huang.jpg' | relative_url }}" alt="Graphical abstract: Quasi-static compression energy absorption characteristics of bamboo-inspired heterogeneous hybrid structure">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.tws.2026.115160">Quasi-static compression energy absorption characteristics of bamboo-inspired heterogeneous hybrid structure with CFRP/SLM-fabricated AlSi10Mg lattice</a></div>
      <div class="pub-item__authors"><strong>Mian Huang</strong>, Bing Yang, Yining Wang, Cheng Li, <strong>Shuwei Zhou</strong>, Dongdong Chen, Shoune Xiao. <i>Thin-Walled Structures</i> (2026).</div>
      <p class="pub-item__summary">We design a bamboo-inspired CFRP/lattice hybrid structure and evaluate its quasi-static compression energy absorption performance.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2025-ESWA-Feng.jpg' | relative_url }}" alt="Graphical abstract: Probabilistic fatigue life prediction in additive manufacturing materials">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.eswa.2025.127098">Probabilistic fatigue life prediction in additive manufacturing materials with a physics-informed neural network framework</a></div>
      <div class="pub-item__authors"><strong>Feng Feng</strong>, Tao Zhu, Bing Yang, Zhe Zhang, <strong>Shuwei Zhou</strong>, Shoune Xiao. <i>Expert Systems with Applications</i> (2025).<span class='show_paper_citations' data='krmnMWIAAAAJ:LkGwnXOMwfcC'></span></div>
      <p class="pub-item__summary">We develop a physics-informed neural network framework for probabilistic fatigue life prediction in additively manufactured materials.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2025-MSEA-WEN.jpg' | relative_url }}" alt="Graphical abstract: In-situ study of crack propagation mechanisms in wire arc additive manufactured Al-Mg alloys">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.msea.2025.147802">In-situ study of crack propagation mechanisms in wire arc additive manufactured Al-Mg alloys: Multiple strategies involving microdefects and microstructures</a></div>
      <div class="pub-item__authors"><strong>Weiying Wen</strong>, Huan Qi, Zhen Liao, Lanxin Jiang, Mian Huang, Bing Yang, Zhiwei Wu, <strong>Shuwei Zhou</strong>. <i>Materials Science and Engineering: A</i> (2025).<span class='show_paper_citations' data='krmnMWIAAAAJ:_FxGoFyzp5QC'></span></div>
      <p class="pub-item__summary">We investigate in-situ crack propagation mechanisms in wire-arc additively manufactured Al-Mg alloys across multiple microstructural strategies.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2025-EFM-Wang.jpg' | relative_url }}" alt="Graphical abstract: Effective stress intensity factor range for fatigue cracks propagating in mixed mode I-II loading">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.engfracmech.2024.110641">Effective stress intensity factor range for fatigue cracks propagating in mixed mode I-II loading</a></div>
      <div class="pub-item__authors"><strong>Shuancheng Wang</strong>, <strong>Shuwei Zhou</strong>, Bing Yang, Shoune Xiao, Guangwu Yang, Tao Zhu. <i>Engineering Fracture Mechanics</i> (2024).<span class='show_paper_citations' data='krmnMWIAAAAJ:ufrVoPGSRksC'></span></div>
      <p class="pub-item__summary">We define an effective stress intensity factor range for mixed-mode I-II fatigue crack propagation.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2024-EFM-WANG.jpg' | relative_url }}" alt="Graphical abstract: Effect of stress ratio and overload on mixed-mode crack propagation behaviour of EA4T steel">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.engfracmech.2024.110210">Effect of stress ratio and overload on mixed-mode crack propagation behaviour of EA4T steel</a></div>
      <div class="pub-item__authors"><strong>Shuancheng Wang</strong>, Bing Yang, <strong>Shuwei Zhou</strong>, Yuanzhi Wang, Shoune Xiao. <i>Engineering Fracture Mechanics</i> (2024).<span class='show_paper_citations' data='krmnMWIAAAAJ:ufrVoPGSRksC'></span></div>
      <p class="pub-item__summary">We study how stress ratio and overload affect mixed-mode crack propagation behavior in EA4T steel.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2024-CJME-WANG.webp' | relative_url }}" alt="Graphical abstract: Closure Effect of I + II Mixed-mode Crack for EA4T Axle Steel">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1186/s10033-024-01061-1">Closure Effect of I + II Mixed-mode Crack for EA4T Axle Steel</a></div>
      <div class="pub-item__authors"><strong>Shuancheng Wang</strong>, Bing Yang, <strong>Shuwei Zhou</strong>, Jian Li, Shoune Xiao. <i>Chinese Journal of Mechanical Engineering</i> (2024).<span class='show_paper_citations' data='krmnMWIAAAAJ:eQOLeE2rZwMC'></span></div>
      <p class="pub-item__summary">We analyze closure effects of mixed-mode I+II cracks in EA4T axle steel.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2025-IJF-feng.jpg' | relative_url }}" alt="Graphical abstract: A physics-informed neural network approach for predicting fatigue life of SLM 316L stainless steel">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.ijfatigue.2024.108486">A physics-informed neural network approach for predicting fatigue life of SLM 316L stainless steel based on defect features</a></div>
      <div class="pub-item__authors"><strong>Feng Feng</strong>, Tao Zhu, Bing Yang, <strong>Shuwei Zhou</strong>, Shoune Xiao. <i>International Journal of Fatigue</i> (2024).<span class='show_paper_citations' data='krmnMWIAAAAJ:YsMSGLbcyi4C'></span></div>
      <p class="pub-item__summary">We predict SLM 316L fatigue life with a physics-informed neural network based on defect features.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2023-EFM-Wang.jpg' | relative_url }}" alt="Graphical abstract: Mixed mode crack growth behaviour considering plasticity-induced and roughness-induced closure">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1016/j.engfracmech.2023.109430">Mixed mode crack growth behaviour considering plasticity-induced and roughness-induced closure</a></div>
      <div class="pub-item__authors"><strong>Shuancheng Wang</strong>, Bing Yang, Jian Li, <strong>Shuwei Zhou</strong>, Shoune Xiao. <i>Engineering Fracture Mechanics</i> (2023).<span class='show_paper_citations' data='krmnMWIAAAAJ:qjMakFHDy7sC'></span></div>
      <p class="pub-item__summary">We examine mixed-mode crack growth considering plasticity- and roughness-induced closure effects.</p>
    </div>
  </div>

  <div class="pub-item">
    <div class="pub-item__thumb">
      <img src="{{ '/images/2021-CJME-Wei.webp' | relative_url }}" alt="Graphical abstract: Optimisation Method for Determination of Crack Tip Position Based on Gauss-Newton Iterative Technique">
    </div>
    <div class="pub-item__text">
      <div class="pub-item__title"><a href="https://doi.org/10.1186/s10033-021-00585-0">Optimisation Method for Determination of Crack Tip Position Based on Gauss-Newton Iterative Technique</a></div>
      <div class="pub-item__authors"><strong>Bing Yang</strong>, Zhanjiang Wei, Zhen Liao, <strong>Shuwei Zhou</strong>, Shoune Xiao, Tao Zhu, Guangwu Yang, Mingmeng Wang. <i>Chinese Journal of Mechanical Engineering</i> (2021).<span class='show_paper_citations' data='krmnMWIAAAAJ:2osOgNQ5qMEC'></span></div>
      <p class="pub-item__summary">We develop a Gauss-Newton iterative method to accurately determine crack tip positions from experimental measurements.</p>
    </div>
  </div>
</div>

<span class="anchor" id="educations"></span>
## Educations
- *2023.10 - present*, Ph.D. candidate in the Institute of Metal Forming, RWTH Aachen University, Germany.
- *2020.09 - 2023.06*, Master's degree in Vehicle Engineering, State Key Laboratory of Rail Transit Vehicle System, Southwest Jiaotong University, China.
- *2016.09 - 2020.06*, Bachelor's degree in Engineering Mechanics, School of Mechanics and Aerospace Engineering, Southwest Jiaotong University, China.

<span class="anchor" id="peer-reviewer"></span>
## Peer Reviewer
- International Journal of Fatigue
- Engineering Fracture Mechanics
- Theoretical and Applied Fracture Mechanics
- International Journal for Numerical Methods in Engineering
- Reliability Engineering and System Safety
- Expert Systems with Applications
- Engineering Structures
- Engineering Applications of Artificial Intelligence
- Journal of Materials Research and Technology
- Structural Health Monitoring
- International Journal of Pressure Vessels and Piping
- International Journal of Cast Metals Research
- Journal of Central South University
- Digital Engineering
- Computers, Materials & Continua 
- 工程热物理学报 (Journal of Engineering Thermophysics)


