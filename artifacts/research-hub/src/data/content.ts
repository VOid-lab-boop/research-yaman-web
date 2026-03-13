export const lectures = [
  {
    id: 1,
    title: "Introduction to Scientific Research",
    week: "Week 1",
    summary: "Introduction to the concepts of search vs. research, search engines, and scientific research.",
    content: `
      <h4 class="text-xl font-semibold text-white mb-4">Search vs Research</h4>
      <ul class="list-disc pl-5 space-y-2 mb-6 text-slate-300">
        <li><strong>Search:</strong> you want to look for text in multiple documents or pages. Search is the process of looking for Something in a non-systemic manner.</li>
        <li><strong>Find:</strong> you try to find text in the current document or web page.</li>
        <li><strong>Research:</strong> is a process of reaching a conclusion in a systemic manner. Research aims to reveal new information and establish a correct conclusion based on that.</li>
      </ul>
      
      <h4 class="text-xl font-semibold text-white mb-4">Search Engines & Databases</h4>
      <p class="mb-4 text-slate-300">A Search Engine is a software program that helps people find the information they are looking for online using keywords or phrases.</p>
      <div class="bg-white/5 p-4 rounded-lg mb-6 border border-white/10">
        <h5 class="font-medium text-blue-300 mb-2">Academic Database vs Google Scholar:</h5>
        <p class="text-sm text-slate-300"><strong>Database:</strong> Information is organized and standardized. Filter Google to pick out scholarly information. More limiting functions. Niche type databases available (well organized). Paid by University on subscription basis for students.</p>
      </div>

      <h4 class="text-xl font-semibold text-white mb-4">What is Scientific Research?</h4>
      <p class="mb-4 text-slate-300 text-lg font-medium text-cyan-300">Claim + Evidence + Reasoning</p>
      <p class="mb-4 text-slate-300"><strong>Philosophy:</strong> Filling knowledge gap / Solve problem / Mix between two philosophy.<br/>Scientific Research is investigating and acquiring or expanding our understanding.</p>
      
      <h5 class="font-medium text-white mb-2 mt-4">Importance:</h5>
      <p class="mb-4 text-slate-300 text-sm">To Get a degree / To improve skills / To discover / To make a useful contribution / Helping us understand how things work / Finding solutions for world problems / Enhancing quality of life</p>

      <h5 class="font-medium text-white mb-2 mt-4">Key Features:</h5>
      <ol class="list-decimal pl-5 space-y-2 mb-6 text-slate-300 text-sm">
        <li><strong>Systematic:</strong> Research involves a systematic and structured approach to investigation and inquiry.</li>
        <li><strong>Objective:</strong> Research aims to be objective, unbiased, and free from personal opinions.</li>
        <li><strong>Empirical:</strong> Research relies on empirical evidence, which is evidence based on observation or experience.</li>
        <li><strong>Theoretical:</strong> Research is often guided by theoretical frameworks or models.</li>
        <li><strong>Analytical:</strong> Research involves the analysis and interpretation of data, information, and evidence.</li>
      </ol>

      <h4 class="text-xl font-semibold text-white mb-4">11 Scientific Research Steps</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
        <div class="bg-blue-900/20 p-3 rounded border border-blue-500/20"><strong>1. Getting a research idea:</strong> Critical thinking, Scientific background, Being a keen observer and reader, Identify a research problem or question.</div>
        <div class="bg-blue-900/20 p-3 rounded border border-blue-500/20"><strong>2. Reviewing the literature:</strong> Ability to search Medical Electronic databases (PubMed, Cochrane, Google Scholar, EBSCO, EMBASE, SCOPUS, Web of knowledge, etc.).</div>
        <div class="bg-blue-900/20 p-3 rounded border border-blue-500/20"><strong>3. Planning for the study (Research Design):</strong> Ability to write a study protocol, Selection of participants, data collection methods, and data analysis techniques.</div>
        <div class="bg-blue-900/20 p-3 rounded border border-blue-500/20"><strong>4. Piloting the study:</strong> pilot sample.</div>
        <div class="bg-blue-900/20 p-3 rounded border border-blue-500/20"><strong>5. Gaining Ethical approval:</strong> Ability to comply with guidelines of your institution Ethics Committee or Institutional Review Board (IRB).</div>
        <div class="bg-blue-900/20 p-3 rounded border border-blue-500/20"><strong>6. Study implementation:</strong> Clinical skills if interventional study.</div>
        <div class="bg-blue-900/20 p-3 rounded border border-blue-500/20"><strong>7. Data collection:</strong> Data collection tools e.g. Redcap.</div>
        <div class="bg-blue-900/20 p-3 rounded border border-blue-500/20"><strong>8. Data entry:</strong> Ability to use MS Excel, Google sheets, etc.</div>
        <div class="bg-blue-900/20 p-3 rounded border border-blue-500/20"><strong>9. Data analysis:</strong> Ability to interpret descriptive and inferential statistics. Ability to run statistical tests on software e.g. SPSS, R, STATA, SAS.</div>
        <div class="bg-blue-900/20 p-3 rounded border border-blue-500/20"><strong>10. Writing manuscript:</strong> Following standard reporting Checklists, Follow scientific writing rules, English language proficiency.</div>
        <div class="bg-blue-900/20 p-3 rounded border border-blue-500/20 md:col-span-2"><strong>11. Publication:</strong> Presentation skills, Experience in Journal selection and answering reviewer's comments.</div>
      </div>
    `
  },
  {
    id: 2,
    title: "Types of Scientific Research",
    week: "Week 1",
    summary: "Types of research including basic/applied, quantitative/qualitative/mixed, and online scientific resources.",
    content: `
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
          <h4 class="text-lg font-semibold text-cyan-300 mb-2">Basic Research</h4>
          <p class="text-sm text-slate-300">Solve a problem that hasn't any application to any practical problem in the world e.g. fill the gap.</p>
        </div>
        <div class="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-colors">
          <h4 class="text-lg font-semibold text-cyan-300 mb-2">Applied Research</h4>
          <p class="text-sm text-slate-300">When the solution to a research problem does have practical consequences, e.g., a disease needs therapy.</p>
        </div>
      </div>

      <h4 class="text-xl font-semibold text-white mb-4 mt-8">Methodological Approaches</h4>
      <div class="space-y-4 mb-8">
        <div class="border-l-4 border-blue-500 pl-4 py-1">
          <h5 class="text-lg font-medium text-white">Quantitative Research</h5>
          <p class="text-sm text-slate-300 mt-1">Studies are based on counting or measuring some type of data. Aim to evaluate the 'when,' 'where,' and 'what' of the research topic or question. It basically measures numerical data to discover patterns.</p>
          <p class="text-sm text-slate-400 mt-2">Involves surveys, experiments, and observational studies. Data is collected using structured instruments (questionnaires). Data is analyzed using statistical methods (regression, hypothesis testing). Outcome is often a numerical value or a statistical model.</p>
        </div>
        
        <div class="border-l-4 border-purple-500 pl-4 py-1">
          <h5 class="text-lg font-medium text-white">Qualitative Research</h5>
          <p class="text-sm text-slate-300 mt-1">It focuses on the quality of the data rather than the quantity. Aim to investigate the 'why' and the 'how' of the decision-making process. It leads to a solution after a better understanding of the problem.</p>
          <p class="text-sm text-slate-400 mt-2">Involves case studies, content analysis, and ethnographic research. Data is collected using unstructured or semi-structured instruments (interviews, focus groups). Analyzed using thematic analysis. Outcome is a rich, detailed description of a phenomenon or themes.</p>
        </div>
        
        <div class="border-l-4 border-cyan-500 pl-4 py-1">
          <h5 class="text-lg font-medium text-white">Mixed Research</h5>
          <p class="text-sm text-slate-300 mt-1">Combines both quantitative and qualitative research methods to achieve a more comprehensive understanding of a research problem. Integration of data collection and analysis methods from both traditions. Offers flexibility in research design.</p>
        </div>
      </div>

      <h4 class="text-xl font-semibold text-white mb-4">Other Types of Research</h4>
      <p class="text-sm text-slate-300 mb-6">1. Exploratory Research &nbsp; 2. Descriptive research &nbsp; 3. Explanatory research &nbsp; 4. Longitudinal Research &nbsp; 5. Cross sectional Research &nbsp; 6. Action research</p>

      <h4 class="text-xl font-semibold text-white mb-4">Resources & Communication</h4>
      <div class="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
        <div>
          <strong class="text-blue-300">Publisher vs Database:</strong>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Publisher:</strong> an organization that publishes books, magazines, or newspapers.</li>
            <li><strong>Database:</strong> is an online tool comprised of many journals that often focus on a broad area. Databases are constantly updated. The database's name doesn't always indicate its scope.</li>
          </ul>
        </div>
        <div>
          <strong class="text-blue-300">Famous Publishers:</strong>
          <p class="mt-2 text-slate-400">Springer, Cambridge university press, John Wiley & Sons, Blackwell Publishing, SAGE Publishing, Taylor & Francis, MDPI, Elsevier, Nature.</p>
          <strong class="text-blue-300 block mt-3">Written Communication:</strong>
          <p class="text-slate-400">Journal articles, Review article, Book reviews, Proposals, Posters, Case study, Clinical trial, Perspective, Theses, Presentations, Letter to editor, Reports.</p>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: "Phases of Research & Journal Articles",
    week: "Week 2",
    summary: "Research process phases, journal article structure, titles, authors, and keywords.",
    content: `
      <h4 class="text-xl font-semibold text-white mb-4">The Research Process</h4>
      <p class="text-sm text-slate-300 mb-4">The research process having a number of closely related actions. These activities should be following in a strictly prescribed sequence otherwise researcher may face the problem in completion of the research. Each step is specific and they are separate and distinct from each other.</p>
      
      <div class="bg-blue-900/20 rounded-xl p-4 border border-blue-500/20 mb-8">
        <h5 class="text-blue-300 font-medium mb-3">Steps Sequence:</h5>
        <p class="text-sm text-slate-300 leading-relaxed">
          Identification of research problem ➔ Broad literature survey ➔ Hypothesis formulation ➔ Preparation of research design ➔ Determining sample design ➔ Data collection ➔ Analysis of data ➔ Hypothesis testing ➔ Generalizations and interpretation ➔ Preparation of the report or presentation of the results
        </p>
      </div>

      <h4 class="text-xl font-semibold text-white mb-4">Journal (Original) Articles</h4>
      <p class="text-sm text-slate-300 mb-4">An original article is a type of research paper that: Presents new, original research findings or results / Presents new, unpublished research findings / Presents reports on original research conducted by the authors / Contributes to the existing body of knowledge in a particular field.</p>
      
      <h5 class="font-medium text-white mb-2">Purpose:</h5>
      <ol class="list-decimal pl-5 text-sm text-slate-300 space-y-1 mb-6">
        <li>Contribute to the advancement of knowledge in a particular field or discipline.</li>
        <li>Share new research findings with the academic community.</li>
        <li>Stimulate discussion, debate, and further research on a particular topic.</li>
      </ol>

      <h4 class="text-xl font-semibold text-white mb-4">Article Elements</h4>
      
      <div class="space-y-6">
        <div>
          <h5 class="text-lg font-medium text-cyan-300 mb-2">1. The Title</h5>
          <p class="text-sm text-slate-300 mb-2"><strong>Characteristics:</strong> Clear and concise / Understandable / Informative (idea of what work is about) / Specific / Attention-grabbing / Free from abbreviation.</p>
          <p class="text-sm text-slate-300 mb-2"><strong>Types of Titles:</strong></p>
          <ul class="list-disc pl-5 text-sm text-slate-400 space-y-1 mb-2">
            <li><strong>Descriptive (Neutral):</strong> provides a clear summary (e.g., 'The Effects of Climate Change on Biodiversity')</li>
            <li><strong>Declarative:</strong> makes a statement/declaration generally describing results (e.g., 'Climate Change is the Greatest Threat...')</li>
            <li><strong>Interrogative:</strong> asks a question (e.g., 'Can We Save the World's Biodiversity...?')</li>
            <li><strong>Comparative:</strong> compares two or more things.</li>
          </ul>
          <p class="text-sm text-slate-300"><strong>Tips:</strong> Use relevant keywords, avoid technical jargon, keep it concise, make it attractive, use action verbs (investigate, analyze).</p>
        </div>

        <div>
          <h5 class="text-lg font-medium text-cyan-300 mb-2">2. Authors & Affiliation</h5>
          <p class="text-sm text-slate-300 mb-2"><strong>Authorship Definition:</strong> All authors whose names appear on the submission. They made considerable contributions to the design of the work; analysis or interpretation of data; or the creation of new software used in the work. They drafted the work or revised it critically. They approved the version to be published, and agree to be answerable for all aspects of the work.</p>
          <p class="text-sm text-slate-300"><strong>ORCID:</strong> a unique, persistent identifier free of charge to researchers. All people who participate in research are uniquely identified and connected to their contributions across disciplines, borders, and time.</p>
        </div>

        <div>
          <h5 class="text-lg font-medium text-cyan-300 mb-2">3. Keywords</h5>
          <p class="text-sm text-slate-300 mb-2">Words or short phrases that capture the key aspects of your manuscript.</p>
          <p class="text-sm text-slate-300 mb-2"><strong>Two main purposes:</strong> 1. Categorizing your paper during submission. 2. Indexing your paper after publication.</p>
          <p class="text-sm text-slate-300"><strong>Tips:</strong> Follow journal guidelines, focus on main topic, include specific methodology, avoid one-word keywords, avoid overlapping with title, perform keyword research.</p>
        </div>
      </div>
    `
  },
  {
    id: 4,
    title: "Planning for Research",
    week: "Week 2",
    summary: "Research problem, question, hypothesis, abstract, introduction, materials & methods, and results sections.",
    content: `
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white/5 p-5 rounded-xl border border-white/10">
          <h4 class="text-lg font-semibold text-cyan-300 mb-2">Statement of Purpose</h4>
          <p class="text-sm text-slate-300">The words purpose or goal usually appear in a purpose statement. It identifies the key study variables and their possible interrelationships.<br/><br/><strong>Statement of purpose:</strong> The researcher's summary of the overall study goal.<br/><strong>Research aims or objectives:</strong> The specific missions to be achieved by conducting the study.</p>
        </div>
        <div class="bg-white/5 p-5 rounded-xl border border-white/10">
          <h4 class="text-lg font-semibold text-cyan-300 mb-2">The Research Problem</h4>
          <p class="text-sm text-slate-300"><strong>Research problem:</strong> A situation or circumstance that requires a solution to be described, explained, or predicted.<br/><br/><strong>Problem statement:</strong> A statement displaying the research problem.<br/><br/><strong>Sources:</strong> Experience and clinical fieldwork / literature / Social issues / Theory / Ideas from external sources.</p>
        </div>
      </div>

      <h4 class="text-xl font-semibold text-white mb-4">Research Question & Hypothesis</h4>
      <p class="text-sm text-slate-300 mb-4"><strong>Research questions:</strong> The specific queries the researcher wants to answer in addressing the research problem.<br/><strong>Hypothesis:</strong> The researcher's predictions about relationships among variables.</p>
      
      <div class="border-l-4 border-blue-500 pl-4 py-2 mb-6 bg-blue-900/10">
        <h5 class="text-base font-medium text-white mb-1">Definition of Hypothesis</h5>
        <p class="text-sm text-slate-300">A statement of predicted relationship between the independent and dependent variables under investigation. It provides the reader with an understanding of the researcher's expectations. It should be very specific and limited to the piece of research.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 mb-8">
        <div class="p-4 bg-slate-800/50 rounded-lg">
          <strong class="text-white block mb-1">Simple vs Complex:</strong>
          <span class="text-cyan-400">Simple:</span> Expresses relationship between ONE independent and ONE dependent variable.<br/>
          <span class="text-cyan-400">Complex:</span> States relationship between TWO OR MORE independent and/or dependent variables.
        </div>
        <div class="p-4 bg-slate-800/50 rounded-lg">
          <strong class="text-white block mb-1">Directional vs Non-directional:</strong>
          <span class="text-cyan-400">Directional:</span> Predicts the direction of a relationship.<br/>
          <span class="text-cyan-400">Non-directional:</span> Predicts the existence of a relationship, not its direction.
        </div>
        <div class="p-4 bg-slate-800/50 rounded-lg sm:col-span-2">
          <strong class="text-white block mb-1">Research vs Null (H0):</strong>
          <span class="text-cyan-400">Research:</span> States actual prediction.<br/>
          <span class="text-cyan-400">Null (H0):</span> Predicts that NO relationship exists between variables. It is the hypothesis subjected to statistical analysis. Always assumes no relationship.
        </div>
      </div>
      
      <p class="text-sm text-slate-300 mb-8"><strong>Purposes of Hypothesis:</strong> Suggests an answer to the research question / Provides the reader with an understanding of expectations / Guides the research design / Dictates the type of statistical analysis to be used.</p>

      <h4 class="text-xl font-semibold text-white mb-4">Sections of the Article</h4>
      
      <div class="space-y-4 text-sm text-slate-300">
        <div class="border border-white/10 rounded-lg p-4 bg-black/20">
          <h5 class="text-lg font-medium text-blue-400 mb-2">Abstract</h5>
          <p><strong>Purpose:</strong> Summarize the article's main points, including the research question, methods, results, and conclusions.</p>
          <p class="mt-2"><strong>Characteristics:</strong> 1. Concise (150-250 words). 2. Clear. 3. Free of references. 4. Accurate.</p>
        </div>

        <div class="border border-white/10 rounded-lg p-4 bg-black/20">
          <h5 class="text-lg font-medium text-blue-400 mb-2">Materials & Methods</h5>
          <ol class="list-decimal pl-5 space-y-1">
            <li><strong>Materials:</strong> Description of materials used (equipment, software, reagents).</li>
            <li><strong>Methods:</strong> Description of methods to collect/analyze data.</li>
            <li><strong>Study design:</strong> Experimental or control groups.</li>
            <li><strong>Sampling strategy:</strong> How participants/samples were selected.</li>
            <li><strong>Data collection methods:</strong> Surveys, interviews, observations.</li>
            <li><strong>Data analysis methods:</strong> Statistical software or techniques.</li>
          </ol>
        </div>

        <div class="border border-white/10 rounded-lg p-4 bg-black/20">
          <h5 class="text-lg font-medium text-blue-400 mb-2">Results</h5>
          <p><strong>Purpose:</strong> Presents the study's findings, including visualizations, tables, or figures. Offers objectively your key results, without interpretation.</p>
          <p class="mt-2"><strong>Components:</strong> 1. Description of data (sample size, population). 2. Summary statistics (means, medians, SD). 3. Data visualizations (tables, figures). 4. Results of statistical analyses (t-tests, ANOVA, regression).</p>
        </div>
      </div>
    `
  },
  {
    id: 5,
    title: "Research Design",
    week: "Week 3",
    summary: "Experimental, observational, quasi-experimental, qualitative, and mixed-methods study designs.",
    content: `
      <p class="text-sm text-slate-300 mb-6 leading-relaxed">A research design is a strategy for answering your research question using empirical data. Creating a research design means making decisions about: Your overall research objectives and approach / Whether you'll rely on primary or secondary research / Your sampling methods / Data collection methods / Procedures to collect data / Data analysis methods.</p>
      
      <p class="text-sm text-slate-300 mb-6"><strong>Factors to consider:</strong> 1. Research question 2. Study population 3. Data collection methods 4. Resources (time, money) 5. Ethical considerations.</p>

      <h4 class="text-xl font-semibold text-white mb-4">5 Types of Study Designs</h4>
      
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-900/30 to-transparent p-4 rounded-l-xl border-l-4 border-blue-500">
          <h5 class="text-lg font-medium text-cyan-300 mb-2">1. Experimental Study Design</h5>
          <p class="text-sm text-slate-300 mb-2">Tests cause-and-effect relationships.</p>
          <ul class="list-disc pl-5 text-sm text-slate-400 space-y-1 mb-3">
            <li><strong>RCT (Randomized Controlled Trial):</strong> Participants randomly assigned to intervention or control.</li>
            <li><strong>Non-Randomized:</strong> Assigned based on non-random criteria.</li>
          </ul>
          <p class="text-sm text-slate-300 mb-1"><strong>Components (Animals):</strong> Treatment Groups, Control Groups, Randomization, Blinding, Sample Size.</p>
          <p class="text-sm text-slate-300 mb-1"><strong>Examples (Humans):</strong> Clinical Trial, Behavioral Intervention, Nutrition Study.</p>
          <div class="bg-black/40 p-3 rounded mt-2">
            <strong class="text-xs text-white">Declaration of Helsinki (Ethics for Humans):</strong>
            <p class="text-xs text-slate-400 mt-1">1. Protecting Patient Health 2. Knowledge Cannot Trample Rights 3. Additional Considerations 4. Following Local Regulatory Norms 5. Consideration of Risks/Benefits 6. Protection of Vulnerable Groups 7. Focus on Ethics 8. Protection of Privacy/Confidentiality.</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-900/30 to-transparent p-4 rounded-l-xl border-l-4 border-purple-500">
          <h5 class="text-lg font-medium text-cyan-300 mb-2">2. Observational Study Design</h5>
          <p class="text-sm text-slate-300 mb-2">Examines effect of intervention, risk, diagnostic test or treatment without trying to manipulate who is exposed to it.</p>
          <ul class="list-disc pl-5 text-sm text-slate-400 space-y-1">
            <li><strong>Cohort Study:</strong> Group with shared characteristic followed over time to observe outcomes.</li>
            <li><strong>Case-Control Study:</strong> People with specific outcome compared to those without to identify risk factors.</li>
            <li><strong>Cross-Sectional Study:</strong> A snapshot of a population at a single time to examine relationships.</li>
          </ul>
        </div>

        <div class="bg-gradient-to-r from-teal-900/30 to-transparent p-4 rounded-l-xl border-l-4 border-teal-500">
          <h5 class="text-lg font-medium text-cyan-300 mb-2">3. Quasi-Experimental Study Design</h5>
          <ul class="list-disc pl-5 text-sm text-slate-400 space-y-1">
            <li><strong>Before-After Study:</strong> Measures taken before and after an intervention to assess impact.</li>
            <li><strong>Time-Series Study:</strong> Measures taken at multiple times to examine trends.</li>
          </ul>
        </div>

        <div class="bg-gradient-to-r from-orange-900/30 to-transparent p-4 rounded-l-xl border-l-4 border-orange-500">
          <h5 class="text-lg font-medium text-cyan-300 mb-2">4. Qualitative Study Design</h5>
          <ul class="list-disc pl-5 text-sm text-slate-400 space-y-1">
            <li><strong>Phenomenological:</strong> In-depth interviews/observations to explore experiences.</li>
            <li><strong>Grounded Theory:</strong> Data collected/analyzed to develop a theoretical framework explaining a phenomenon.</li>
            <li><strong>Content Analysis:</strong> Text or image data analyzed to identify themes/patterns.</li>
          </ul>
        </div>

        <div class="bg-gradient-to-r from-pink-900/30 to-transparent p-4 rounded-l-xl border-l-4 border-pink-500">
          <h5 class="text-lg font-medium text-cyan-300 mb-2">5. Mixed-Methods Study Design</h5>
          <p class="text-sm text-slate-300">Combination of Quantitative and Qualitative Methods. Both numerical data and textual or observational data are collected and analyzed to provide a more comprehensive understanding of the research question.</p>
        </div>
      </div>
    `
  },
  {
    id: 6,
    title: "Study Design - Observational & Experimental",
    week: "Week 3",
    summary: "Detailed overview of observational and experimental study designs including cross-sectional, case-control, cohort, and RCTs.",
    content: `
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-white/5 p-5 rounded-xl border border-white/10">
          <h4 class="text-lg font-semibold text-cyan-300 mb-2">Observational Studies</h4>
          <p class="text-sm text-slate-300">Research methods that involve observing and recording the effect of a risk factor, diagnostic test, treatment <strong>without trying to change</strong> who is or isn't exposed to it.</p>
        </div>
        <div class="bg-white/5 p-5 rounded-xl border border-white/10">
          <h4 class="text-lg font-semibold text-cyan-300 mb-2">Experimental Studies</h4>
          <p class="text-sm text-slate-300">Ones where researchers <strong>introduce an intervention</strong> and study the effects.</p>
        </div>
      </div>

      <h4 class="text-xl font-semibold text-white mb-4">Types of Observational Studies</h4>
      
      <div class="space-y-4 mb-8">
        <div class="border border-white/10 rounded-lg p-4 bg-black/20">
          <h5 class="text-lg font-medium text-blue-400 mb-1">Descriptive vs Analytical</h5>
          <p class="text-sm text-slate-300 mb-2"><strong>Descriptive:</strong> First step in epidemiological investigation. Focuses on description of occurrence of disease. Based on routinely available data (e.g., mortality statistics). The link between exposure and effect is not analyzed. May examine pattern of death based on age, sex, ethnicity.</p>
          <p class="text-sm text-slate-300"><strong>Analytical:</strong> They go further by analyzing relationships between health status and other variables. Determine whether a relationship exists and assess the strength/direction.</p>
        </div>

        <div class="border border-white/10 rounded-lg p-4 bg-black/20">
          <h5 class="text-lg font-medium text-blue-400 mb-1">1. Cross Sectional Study</h5>
          <p class="text-sm text-slate-300">Provides information about a health condition that exist at a given time. Data collected simultaneously (survey, observation). Called a <strong>snapshot of a population</strong>. Quick and inexpensive.<br/><em>Example: Prevalence of Hypertension and Associated Lifestyle Factors.</em></p>
        </div>

        <div class="border border-white/10 rounded-lg p-4 bg-black/20">
          <h5 class="text-lg font-medium text-blue-400 mb-1">2. Case Control Study</h5>
          <p class="text-sm text-slate-300">Used to identify and evaluate the association between exposures (risk factors) and outcomes (diseases). Particularly useful for studying <strong>rare diseases</strong>. Quick, inexpensive, relatively simple, except that it is <strong>backward-looking (retrospective)</strong> based on exposure histories of cases and controls.<br/><em>Example: Lung Cancer and Smoking / Heart Disease and Diet.</em></p>
        </div>

        <div class="border border-white/10 rounded-lg p-4 bg-black/20">
          <h5 class="text-lg font-medium text-blue-400 mb-1">3. Cohort Study</h5>
          <p class="text-sm text-slate-300">A cohort is a group sharing a common character within a specific time period (e.g., born in same year). Follows participants <strong>over time</strong>, collecting data at multiple points to observe how exposures affect outcomes as they develop.<br/>Provides the <strong>best information about the causation</strong> of disease and direct measurement of risk. May require long periods.<br/><em>Example: Longitudinal Study on Smoking and Lung Cancer.</em></p>
        </div>
      </div>

      <h4 class="text-xl font-semibold text-white mb-4">Experimental Study details</h4>
      <div class="border border-white/10 rounded-lg p-4 bg-black/20">
        <p class="text-sm text-slate-300 mb-3">Intervention involves attempting to change a variable in one or more groups. Usually <strong>randomized</strong>, meaning subjects are grouped by chance. Effects measured by comparing outcome in experimental group vs control group.</p>
        <h5 class="text-base font-medium text-blue-400 mb-1">RCT (Randomized Controlled Trial)</h5>
        <p class="text-sm text-slate-300">Involves randomly assigning participants to either an experimental group or a control group to measure the effectiveness of an intervention or treatment.<br/><em>Examples: Clinical Drug Trial / Vaccine Efficacy Study.</em></p>
      </div>
    `
  }
];

export const glossary = [
  { term: "Abstract", def: "A concise summary (150-250 words) of an article's main points, including the research question, methods, results, and conclusions, written without citations." },
  { term: "Applied Research", def: "Research conducted when the solution to a problem does have practical consequences, such as finding a new therapy for a disease." },
  { term: "Basic Research", def: "Research aimed at solving a problem that hasn't any immediate application to practical problems, primarily filling a knowledge gap." },
  { term: "Bias", def: "A systemic error or deviation from the truth in results or inferences. Scientific research aims to be objective and unbiased." },
  { term: "Case-Control Study", def: "An observational study that is backward-looking (retrospective), comparing people with a specific outcome to those without it to identify risk factors. Useful for rare diseases." },
  { term: "Cohort Study", def: "An observational study following a group of individuals with a shared characteristic over time to observe outcomes as they develop. Provides the best information on disease causation." },
  { term: "Cross-Sectional Study", def: "An observational study that acts as a 'snapshot of a population' at a single time to examine relationships between variables." },
  { term: "Database", def: "An online tool comprised of organized and standardized academic journals and scholarly information (e.g., PubMed, Scopus). Often paid by universities." },
  { term: "Empirical", def: "Relying on evidence based on direct observation or experience rather than theory or pure logic." },
  { term: "Google Scholar", def: "A search engine that looks for scholarly articles across the web, relying on keyword searches but with fewer limiting functions than dedicated academic databases." },
  { term: "Hypothesis", def: "A statement predicting the relationship between independent and dependent variables under investigation. Must be specific." },
  { term: "Keywords", def: "Words or short phrases capturing the key aspects of a manuscript, used for categorizing during submission and indexing after publication." },
  { term: "Literature Review", def: "The process of searching medical electronic databases (like PubMed, Cochrane, Scopus) to establish the current background knowledge on a research topic." },
  { term: "Mixed Research", def: "Research that integrates data collection and analysis methods from both quantitative and qualitative traditions to provide a comprehensive understanding." },
  { term: "Null Hypothesis (H0)", def: "A statistical hypothesis predicting that NO relationship exists between variables. This is the hypothesis subjected to statistical analysis." },
  { term: "Observational Study", def: "A study examining the effect of a risk factor or treatment without the researcher trying to manipulate who is exposed to it." },
  { term: "ORCID", def: "A unique, persistent identifier free of charge to researchers, connecting them to their academic contributions." },
  { term: "Qualitative Research", def: "Research focusing on data quality rather than quantity, aiming to investigate the 'why' and 'how' of a problem (e.g., using interviews, focus groups)." },
  { term: "Quantitative Research", def: "Research based on counting or measuring numerical data to discover patterns, evaluating 'when', 'where', and 'what' using statistical analysis." },
  { term: "RCT (Randomized Controlled Trial)", def: "An experimental study design randomly assigning participants to experimental or control groups to measure intervention effectiveness." },
  { term: "Research", def: "A process of reaching a conclusion in a systematic manner to reveal new information and establish a correct conclusion." },
  { term: "Research Problem", def: "A situation or circumstance that requires a solution to be described, explained, or predicted." },
  { term: "Search", def: "The process of looking for text in multiple documents or pages in a non-systemic manner." },
  { term: "Variable", def: "A characteristic, number, or quantity that increases or decreases over time or takes different values in different situations (Independent and Dependent variables)." }
];

export const quizQuestions = [
  {
    question: "According to Dr. Lama Rafieh, what is the difference between 'search' and 'find'?",
    options: [
      "Search looks in current document, find looks in multiple documents",
      "Search looks in multiple documents, find looks in current document",
      "They are exactly the same concept",
      "Search is only for databases, find is only for Google"
    ],
    correct: 1,
    explanation: "Lecture 1 clearly states: Search: you want to look for text in multiple documents or pages. Find: you try to find text in the current document or web page."
  },
  {
    question: "Which type of research focuses on 'why' and 'how' questions?",
    options: ["Quantitative", "Qualitative", "Basic", "Longitudinal"],
    correct: 1,
    explanation: "Lecture 2 states Qualitative Research aims to investigate the 'why' and the 'how' of the decision-making process."
  },
  {
    question: "What does RCT stand for?",
    options: [
      "Retroactive Control Test",
      "Randomized Clinical Test",
      "Randomized Controlled Trial",
      "Research Cohort Trial"
    ],
    correct: 2,
    explanation: "Lecture 6: A randomized control trial (RCT) involves randomly assigning participants to experimental or control groups."
  },
  {
    question: "Which study design is considered a 'snapshot of a population'?",
    options: ["Cross-sectional study", "Cohort study", "Case-control study", "RCT"],
    correct: 0,
    explanation: "Lecture 6 defines Cross-sectional study as a 'snapshot of a population' providing information at a given time."
  },
  {
    question: "What does a Null hypothesis (H0) predict?",
    options: [
      "The exact direction of a relationship",
      "That a relationship definitely exists",
      "That no relationship exists between variables",
      "It predicts the methodology to be used"
    ],
    correct: 2,
    explanation: "Lecture 4 states a null hypothesis predicts that NO relationship exists between variables, and it is the hypothesis subjected to statistical analysis."
  },
  {
    question: "What is an ORCID?",
    options: [
      "A medical database",
      "A unique, persistent identifier for researchers",
      "A type of statistical software",
      "A journal publisher"
    ],
    correct: 1,
    explanation: "Lecture 3 defines ORCID as a unique, persistent identifier free of charge to researchers to connect their contributions."
  },
  {
    question: "Which study design is particularly useful for studying RARE diseases?",
    options: ["Cohort study", "Cross-sectional study", "RCT", "Case-control study"],
    correct: 3,
    explanation: "Lecture 6 states the Case-control study design is particularly useful for studying rare diseases or conditions."
  },
  {
    question: "According to Dr. Lama Rafieh, how many main steps are in the Scientific Research process?",
    options: ["7 steps", "9 steps", "11 steps", "15 steps"],
    correct: 2,
    explanation: "Lecture 1 outlines exactly 11 Scientific Research Steps, starting from getting an idea to publication."
  },
  {
    question: "What are the two main purposes of keywords in a journal article?",
    options: [
      "Formatting and styling",
      "Categorizing during submission and Indexing after publication",
      "Proving the hypothesis and analyzing data",
      "Identifying authors and affiliations"
    ],
    correct: 1,
    explanation: "Lecture 3 states keywords serve two main purposes: Categorizing your paper during the submission process and Indexing your paper after publication."
  },
  {
    question: "Which study provides the BEST information about the causation of disease?",
    options: ["Case-control study", "Cross-sectional study", "Cohort study", "Descriptive study"],
    correct: 2,
    explanation: "Lecture 6 mentions Cohort studies provide the best information about the causation of disease and direct measurement of risk."
  }
];

export const aiResponses: Record<string, string> = {
  "hypothesis": "A hypothesis is a statement of predicted relationship between the independent and dependent variables under investigation. (Dr. Lama Rafieh, Lecture 4). The Null hypothesis (H0) predicts that NO relationship exists.",
  "search": "According to Lecture 1: Search is the process of looking for something in a non-systemic manner across multiple documents. Research is a systematic process of reaching a conclusion to reveal new info.",
  "find": "Find refers to looking for text in the current document or web page, whereas Search looks across multiple documents.",
  "quantitative": "Quantitative Research measures numerical data to discover patterns. It evaluates the 'when', 'where', and 'what' using surveys, experiments, and statistical analysis.",
  "qualitative": "Qualitative Research focuses on the quality of data rather than quantity. It investigates the 'why' and 'how' using case studies, interviews, and thematic analysis.",
  "cohort": "A Cohort study follows a group of individuals with a shared characteristic over time to observe outcomes. It provides the BEST information about the causation of disease! (Lecture 6)",
  "cross-sectional": "A Cross-sectional study is a 'snapshot of a population' at a given time. It's quick, inexpensive, and data is collected simultaneously.",
  "case-control": "A Case-control study is backward-looking (retrospective). It compares people with a specific outcome to those without. It is particularly useful for studying RARE diseases.",
  "rct": "RCT stands for Randomized Controlled Trial. Participants are randomly assigned to either an experimental or control group to measure the effectiveness of an intervention.",
  "null": "The Null Hypothesis (H0) predicts that NO relationship exists between variables. It is the hypothesis that is actually subjected to statistical analysis!",
  "keyword": "Keywords are words/short phrases that capture key aspects of your manuscript. They have two main purposes: Categorizing during submission and Indexing after publication.",
  "orcid": "ORCID is a unique, persistent identifier free of charge to researchers. It uniquely identifies you and connects your contributions across disciplines and borders.",
  "abstract": "An abstract summarizes the article's main points (research question, methods, results, conclusions) in about 150-250 words. It should be clear, accurate, and free of references.",
  "database": "An academic database (like PubMed or Scopus) organizes and standardizes scholarly information. Unlike Google Scholar, databases have limiting functions and are often paid by Universities.",
  "p-value": "While not explicitly deep-dived in the lecture text provided, in Biostatistics, a p-value helps determine the statistical significance of your results in hypothesis testing.",
  "steps": "Dr. Lama Rafieh outlines 11 steps: 1. Idea, 2. Literature Review, 3. Planning/Design, 4. Piloting, 5. Ethical approval, 6. Implementation, 7. Data collection, 8. Data entry, 9. Data analysis, 10. Writing, 11. Publication.",
  "hello": "Hello! I am the Biostatistics AI Assistant for Hashemite University dental students. Ask me anything about Dr. Lama Rafieh's 6 lectures!",
  "hi": "Hi there! What research or biostats topic would you like to review today?",
  "thanks": "You're very welcome! Best of luck with your dental research studies at HU!"
};
