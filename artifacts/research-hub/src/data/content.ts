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

export const aiResponses: Array<{ keywords: string[]; answer: string }> = [
  {
    keywords: ["hello", "hi ", "hey", "good morning", "good evening", "salaam", "salam"],
    answer: "Hey there! 😊 Welcome to the Research Hub! I'm your AI study buddy, trained on all 6 lectures from Yaman Akour's Biostatistics & Scientific Research course. Whether you're puzzled about study designs, confused about statistics, or just need a quick definition — I've got you covered! What would you like to learn about today?"
  },
  {
    keywords: ["thanks", "thank you", "شكرا", "appreciate", "helpful"],
    answer: "You're so welcome! 🌟 That's exactly what I'm here for. Don't hesitate to ask anything else — no question is too simple when it comes to research. You've got this! 💪"
  },
  {
    keywords: ["who are you", "what are you", "what can you do", "how can you help"],
    answer: "Great question! 😄 I'm the Research Hub AI Assistant, built specifically for dental students at Hashemite University of Jordan. I know everything covered in the 6 lectures — research types, study designs, databases, biostatistics, how to write journal articles, and more. Just ask me anything and I'll explain it as clearly as possible!"
  },
  {
    keywords: ["hypothesis"],
    answer: "A hypothesis is basically your educated prediction about what you expect to find in your research! 🔬\n\nFormally, it's 'a statement of predicted relationship between the independent and dependent variables under investigation.'\n\nThere are a few types you need to know:\n• Simple hypothesis – one independent variable, one dependent variable\n• Complex hypothesis – two or more variables on either side\n• Directional – predicts the direction of a relationship (e.g., 'more X leads to more Y')\n• Non-directional – just predicts a relationship exists, not which direction\n• Research hypothesis – your actual prediction\n• Null hypothesis (H₀) – states NO relationship exists (this is what statistics actually test!)\n\nRemember: the null hypothesis is always the one you statistically test, even though you believe in your research hypothesis. The goal is to find enough evidence to REJECT the null! 🎯"
  },
  {
    keywords: ["null hypothesis", "h0", "h₀"],
    answer: "The Null Hypothesis (written as H₀) is super important in statistics! 📊\n\nIt predicts that NO relationship exists between the variables you're studying. It always assumes nothing is happening — like saying 'this treatment makes no difference.'\n\nWhy do we use it? Because statistics can't directly prove your hypothesis is true. Instead, you gather evidence to REJECT the null. If your p-value < 0.05, you have enough evidence to say 'the null is probably wrong!' and your research hypothesis is supported.\n\nThink of it like a court trial — the null hypothesis is 'innocent until proven guilty.' 🏛️"
  },
  {
    keywords: ["research question", "research problem", "problem statement"],
    answer: "Great topic! The research question is the heart of any study 💡\n\nHere's the flow:\n1. Research Problem → 'A situation or circumstance that requires a solution to be described, explained, or predicted'\n2. Problem Statement → A written display of that problem\n3. Research Question → The specific queries the researcher wants to answer\n4. Hypothesis → The researcher's predictions about relationships among variables\n\nWhere do research problems come from? Dr. Lama covers 5 sources:\n• Your own experience and clinical fieldwork\n• Reading the literature\n• Social issues you observe\n• Theory\n• Ideas from external sources\n\nFor dental students, your clinics are a goldmine of research ideas! 🦷"
  },
  {
    keywords: ["search", "difference between search and research", "search vs research"],
    answer: "This is one of Dr. Lama's key comparisons from Lecture 1! Here's the breakdown:\n\n🔍 SEARCH:\n• Looking for something in a non-systemic way\n• Short time span\n• No qualifications required\n• Not monitored or regulated\n• Research depends on search, but not the other way around\n\n🔬 RESEARCH:\n• A systematic process of reaching a conclusion\n• Aims to reveal NEW information\n• Long and complex\n• Requires qualifications\n• Monitored and regulated by someone other than the researcher\n\nAlso remember: Search = looking across multiple documents. Find = looking within the current document. Small but important difference! 📌"
  },
  {
    keywords: ["search engine"],
    answer: "A Search Engine is 'a software program that helps people find the information they are looking for online using keywords or phrases.' (Lecture 1) 🌐\n\nSearch engines can find: web pages, images, videos, and files.\n\nFor academic work, don't rely only on Google! There are much better alternatives:\n• Google Scholar – free, scholarly articles\n• PubMed – the gold standard for medical/dental research\n• Scopus – broad scientific coverage\n• Web of Science – great for citation tracking\n\nRemember: A database is NOT the same as a search engine. A database organizes and standardizes information systematically, while a search engine just indexes what's publicly available. 📚"
  },
  {
    keywords: ["quantitative research", "quantitative"],
    answer: "Quantitative research is all about NUMBERS! 📊\n\nKey definition from Lecture 2: 'Involves the collection and analysis of numerical data to answer research questions or test hypotheses.'\n\nIt asks: WHEN? WHERE? WHAT?\n\nHow it works:\n• Methodology: surveys, experiments, observational studies\n• Data collection: structured instruments like questionnaires\n• Data analysis: statistical methods (regression, hypothesis testing)\n• Outcome: a numerical value or statistical model\n\nA dental example: 'What is the average plaque score in patients who brush twice daily vs. once daily?' — that's quantitative! You're measuring and counting. 🦷\n\nIf you want to measure and discover patterns, quantitative is your go-to!"
  },
  {
    keywords: ["qualitative research", "qualitative"],
    answer: "Qualitative research is about UNDERSTANDING, not measuring! 🎨\n\nKey definition from Lecture 2: 'Involves the collection and analysis of non-numerical data, such as text, images, or observations, to gain a deeper understanding of a phenomenon.'\n\nIt asks: WHY? HOW?\n\nHow it works:\n• Methodology: case studies, content analysis, ethnographic research\n• Data collection: interviews, focus groups (unstructured or semi-structured)\n• Data analysis: thematic analysis, content analysis\n• Outcome: a rich, detailed description or set of themes\n\nDental example: 'Why are patients afraid of dental visits?' — you'd interview patients and look for themes in their answers. That's qualitative! 💬\n\nQualitative leads to a solution after BETTER UNDERSTANDING the problem first."
  },
  {
    keywords: ["mixed research", "mixed method", "mixed-method"],
    answer: "Mixed research combines the best of both worlds! 🌟\n\nDefinition from Lecture 2: 'Combines both quantitative and qualitative research methods to achieve a more comprehensive understanding.'\n\nKey characteristics:\n1. Combines strengths of both approaches\n2. Integrates data collection and analysis from both traditions\n3. Flexible in design — adapts to changing conditions\n4. Provides a more COMPREHENSIVE understanding\n\nExample: You could survey 500 patients about their dental hygiene habits (quantitative) AND interview 20 patients about why they do what they do (qualitative). Together, you get the full picture! 🖼️\n\nMixed research is increasingly popular in dental and health research because real-world problems are complex!"
  },
  {
    keywords: ["basic research", "applied research", "basic vs applied"],
    answer: "Two fundamental types of research from Lecture 2! 🔬\n\n📘 BASIC Research:\n• Fills a knowledge gap\n• No immediate practical application\n• Pure curiosity-driven science\n• Example: 'How do bacteria develop antibiotic resistance?' (pure science)\n\n📗 APPLIED Research:\n• Has practical consequences\n• Solves real-world problems\n• Example: 'Which antibiotic works best for dental abscesses?' (directly useful in clinic)\n\nA helpful way to remember: Basic research asks 'How does the world work?' Applied research asks 'How can we fix this problem?' Both are valuable — basic research often becomes the foundation for applied breakthroughs! 🚀"
  },
  {
    keywords: ["cross-sectional", "cross sectional"],
    answer: "Cross-sectional studies are like taking a PHOTOGRAPH of a population! 📸\n\nFrom Lecture 6: 'Provides information about a health condition that exists at a given time/during a given period.'\n\nKey features:\n✅ Data collected simultaneously for all participants\n✅ Called a 'snapshot of a population'\n✅ Can be analytical\n✅ Quick and inexpensive\n✅ Good for measuring PREVALENCE\n\nDental example: 'Prevalence of dental caries among 12-year-olds in Jordan' — you survey them all at once, right now. No follow-up!\n\n⚠️ Limitation: You can't prove cause and effect — you only see what's happening at one moment. But it's a great starting point for research! 🏁"
  },
  {
    keywords: ["case-control", "case control"],
    answer: "Case-control studies look BACKWARDS in time — they're retrospective! 🕰️\n\nFrom Lecture 6: 'Used to identify and evaluate the association between exposures (risk factors) and outcomes (diseases or conditions).'\n\nHow it works:\n• Start with CASES (people who HAVE the disease/condition)\n• Compare to CONTROLS (people who DON'T have it)\n• Look back at their histories to find what was different\n\n✨ Special strength: 'Particularly useful for studying RARE diseases or conditions'\n\nWhy? Because if a disease is rare, you'd wait forever in a cohort study. In case-control, you find existing cases!\n\nDental example: Comparing patients who developed oral cancer vs. those who didn't → looking back at their smoking/alcohol history.\n\nMemory trick: Cases and Controls → C and C → look for the CAUSE! 🔍"
  },
  {
    keywords: ["cohort study", "cohort"],
    answer: "Cohort studies are the gold standard for understanding CAUSATION! 🏆\n\nFrom Lecture 6: 'A cohort is a group of individuals who share a common characteristic within a specific time period.'\n\nHow it works:\n• Follow a group of people OVER TIME\n• Classify them by exposure status (exposed vs. not exposed)\n• Watch and wait for outcomes to develop\n• Compare outcome rates between groups\n\n🌟 Key fact: 'Cohort studies provide the BEST information about the causation of disease and the most direct measurement of the risk of developing disease.'\n\nDental example: Follow 1,000 people over 10 years — some who smoke, some who don't — and track tooth loss rates.\n\n⚠️ Downside: They can take a LONG time and are expensive. But the evidence quality is top-notch!\n\nMemory trick: Cohort = forward-looking (like a journey into the future) 🚀"
  },
  {
    keywords: ["rct", "randomized controlled trial", "randomized control", "clinical trial"],
    answer: "The RCT is the KING of study designs for proving cause and effect! 👑\n\nFull name: Randomized Controlled Trial\n\nFrom Lecture 6: 'A type of study design that involves randomly assigning participants to either an experimental group or a control group to measure the effectiveness of an intervention or treatment.'\n\nKey features:\n• RANDOM assignment → reduces bias\n• INTERVENTION → something is actually done to participants\n• CONTROL group → comparison group that doesn't get the intervention\n• Blinding (single or double) → reduces bias further\n\nExamples from the lectures:\n• Clinical Drug Trial\n• Vaccine Efficacy Study\n• Testing a new dental filling material vs. standard material\n\nThe Declaration of Helsinki guides ethical RCTs — patient protection is always the priority! ⚕️\n\nWhy is randomization so important? It ensures the two groups are comparable, so any difference in outcomes is due to the intervention, not other factors! 🎯"
  },
  {
    keywords: ["observational study", "observational"],
    answer: "Observational studies are ones where researchers observe WITHOUT intervening! 👁️\n\nFrom Lecture 6: 'Research methods that involve observing and recording the effect of a risk factor, diagnostic test, treatment without trying to change who is or isn't exposed to it.'\n\nThe 3 main types:\n\n1️⃣ Cross-sectional → Snapshot at one point in time\n2️⃣ Case-control → Backward-looking, compares cases vs. controls\n3️⃣ Cohort → Forward-looking, follows people over time\n\nObservational vs. Experimental:\n• Observational: You WATCH what happens naturally\n• Experimental: You INTERVENE and change something\n\nThink of it this way: In an observational study, you're a scientist watching nature. In an experimental study, you're a scientist changing nature! 🌿"
  },
  {
    keywords: ["quasi-experimental", "before-after", "time-series"],
    answer: "Quasi-experimental studies are the middle ground between observational and experimental! ⚖️\n\nFrom Lecture 5, there are two main types:\n\n📊 Before-After Study:\n• Measures are taken BEFORE and AFTER an intervention\n• Assesses the impact of that intervention\n• No control group!\n• Example: Measuring plaque scores before and after a new brushing education program\n\n📈 Time-Series Study:\n• Measures taken at MULTIPLE TIME POINTS\n• Examines trends and patterns over time\n• Example: Tracking monthly cavity rates in a school after fluoride introduction\n\nWhy 'quasi'? Because there's no full randomization like an RCT. It's a practical option when randomization isn't possible! Sometimes you can't randomly assign who gets a new public health intervention."
  },
  {
    keywords: ["descriptive study", "descriptive research"],
    answer: "Descriptive studies are usually the FIRST STEP in epidemiological investigation! 🗺️\n\nFrom Lecture 6, key features:\n• Describes the OCCURRENCE of a disease in a population\n• Based on routinely available data or special surveys\n• The link between exposure and effect is NOT analyzed\n• Usually based on mortality statistics\n• May examine patterns by age, sex, ethnicity, time, or location\n\nDental example: 'Describing the pattern of dental caries rates across different age groups in Jordan over the past decade.'\n\nDescriptive studies tell you WHAT is happening. Analytical studies tell you WHY it's happening. You usually start descriptive, then go deeper with analytical! 🔍"
  },
  {
    keywords: ["analytical study", "analytical research"],
    answer: "Analytical studies go DEEPER than descriptive studies! 🧠\n\nFrom Lecture 6: 'They go further by analyzing relationships between health status and other variables.'\n\nWhat they do:\n• Explore relationships and potential causes\n• Determine WHETHER a relationship exists between variables\n• Assess the STRENGTH and DIRECTION of that relationship\n\nTypes of analytical studies:\n• Case-control studies\n• Cohort studies\n• RCTs (when experimental)\n\nAnalytical studies answer 'Is smoking associated with oral cancer?' while descriptive studies just show 'Here's how many oral cancer cases we have.'\n\nThink of it as: Descriptive = Observation. Analytical = Investigation. 🕵️"
  },
  {
    keywords: ["pubmed"],
    answer: "PubMed is the most important database for medical and dental students! ⭐\n\nIt's a FREE biomedical literature database maintained by the US National Library of Medicine (NCBI).\n\nWhy use it?\n✅ Gold standard for peer-reviewed medical/dental literature\n✅ Free access to abstracts, and many full-text articles\n✅ Advanced search filters (date, study type, species, language)\n✅ Covers millions of articles from thousands of journals\n\nDental research uses: Finding systematic reviews on dental materials, clinical evidence for treatment options, epidemiological data.\n\nPro tip: Use MeSH (Medical Subject Headings) terms for more precise searches! For example, searching 'Periodontal Diseases' as a MeSH term finds all related articles. 🔍\n\nBookmark this: ncbi.nlm.nih.gov/pubmed"
  },
  {
    keywords: ["scopus"],
    answer: "Scopus is one of the largest abstract and citation databases in the world! 📚\n\nWhat it covers:\n• Science, Technology, Medicine, AND Social Sciences\n• Broader than PubMed\n• Excellent for citation tracking\n\nWhy dental students use it:\n✅ Covers more disciplines than PubMed\n✅ Great for finding who cited a specific paper\n✅ Tracks journal metrics and author profiles\n✅ Includes conference papers and books\n\nWhen is it useful? When you need to understand the impact of a study, find related work across disciplines, or check a journal's quality (CiteScore).\n\nScopus is subscription-based — access it through your university library! 🎓"
  },
  {
    keywords: ["google scholar"],
    answer: "Google Scholar is great for quick searches — but it has limitations! 🔍\n\nFrom Lecture 1 comparison:\n• Searches scholarly articles, theses, books, and abstracts based on 'keyword'\n• Few limiting functions (sort by relevance, date)\n• Searches across academic publishers, professional societies, online repositories, and the FREE web\n• It does NOT have everything, and NOT everything is free!\n\nDifference from databases:\n• Database: Information is organized and standardized, with many filter options\n• Google Scholar: Just a search engine that picks out scholarly information from the web\n\nBest use: Starting point for a literature search, or finding free PDFs of papers you need. Not a replacement for PubMed or Scopus for rigorous research! 📖"
  },
  {
    keywords: ["cochrane"],
    answer: "The Cochrane Library is the home of the HIGHEST quality evidence! 🏆\n\nIt contains:\n• Systematic reviews\n• Meta-analyses\n• Clinical trial registries\n\nWhy it matters for dental students:\n✅ Cochrane reviews are considered the best evidence for clinical decisions\n✅ Essential for Evidence-Based Dentistry (EBD)\n✅ Answers real clinical questions like 'Which filling material lasts longer?'\n✅ Saves you from reading 50 individual studies — they do it for you!\n\nExample: Before recommending fluoride varnish to parents, you'd cite a Cochrane review showing its effectiveness.\n\nGolden rule: When making clinical decisions, always look for a Cochrane review first! ⚕️"
  },
  {
    keywords: ["database", "databases"],
    answer: "Great topic! From Lecture 2, here's the key distinction:\n\n📘 DATABASE: 'An online tool comprised of many journals that often focus on a broad area. Databases are constantly updated. The database's name doesn't always indicate its scope.'\n\n📰 PUBLISHER: 'An organization that publishes books, magazines, or newspapers.'\n\nImportant databases for dental research:\n• PubMed – Free, biomedical gold standard\n• Scopus – Broad scientific coverage\n• Web of Science – Citation tracking\n• Cochrane Library – Best systematic reviews\n• Google Scholar – Free, broad but less precise\n• ScienceDirect – Full-text Elsevier journals\n• EMBASE – Strong pharmacological coverage\n• EBSCO – Multiple sub-databases\n\nFamous publishers: Elsevier, Springer, Nature, Wiley, SAGE, Taylor & Francis, MDPI 📚"
  },
  {
    keywords: ["p-value", "p value", "statistical significance", "significance"],
    answer: "The p-value is one of the most important — and most misunderstood — concepts in statistics! 📊\n\nWhat it means: The probability that your result occurred by CHANCE (if the null hypothesis were true).\n\nThe golden rule:\n• p < 0.05 → Statistically significant (less than 5% chance it's random)\n• p ≥ 0.05 → Not statistically significant\n\nDental example: You test a new mouthwash vs. placebo for reducing plaque.\n• If p = 0.02 → Only 2% chance this result is random → The mouthwash works! ✅\n• If p = 0.3 → 30% chance it's random → Not convincing evidence ❌\n\n⚠️ Important: Statistical significance ≠ Clinical significance! A treatment might be statistically significant but the actual difference might be too small to matter clinically.\n\nAlways report BOTH the p-value AND the effect size! 🎯"
  },
  {
    keywords: ["mean", "average"],
    answer: "The Mean is the most common measure of central tendency — it's just the average! 📏\n\nFormula: Sum of all values ÷ Number of values (Σx / n)\n\nDental example:\n5 patients have pocket depths of: 2, 3, 4, 5, 6 mm\nMean = (2+3+4+5+6) ÷ 5 = 20 ÷ 5 = 4 mm\n\nWhen to use the mean:\n✅ When data is normally distributed (bell curve)\n✅ When there are no extreme outliers\n\nWhen to be careful:\n⚠️ Outliers distort the mean! If one patient has a pocket depth of 20 mm, the mean shoots up and doesn't represent the 'typical' patient.\n\nIn that case, use the median instead! Always report mean ± standard deviation together. 📊"
  },
  {
    keywords: ["median"],
    answer: "The Median is the middle value — it's NOT affected by outliers! 🛡️\n\nHow to find it:\n1. Order all values from smallest to largest\n2. Find the middle value\n3. If even number of values, average the two middle ones\n\nDental example:\nPocket depths: 2, 3, 4, 5, 6 mm → Median = 4 mm (it's in the middle!)\n\nWhen the median is better than the mean:\n✅ When data is skewed (has outliers)\n✅ For income data, waiting times, pain scores\n\nExample: If 9 patients wait 10 minutes and 1 patient waits 200 minutes:\n• Mean waiting time = 28 min (distorted!)\n• Median waiting time = 10 min (more representative ✅)\n\nThe median tells you what the 'typical' value is, regardless of extremes! 🎯"
  },
  {
    keywords: ["mode"],
    answer: "The Mode is the most FREQUENT value in a dataset! 🔢\n\nSimple rule: Whatever appears most often = the mode.\n\nDental example:\nPocket depths of 10 patients: 2, 3, 3, 3, 4, 4, 5, 5, 5, 5 mm\nMode = 5 mm (appears 4 times, the most!)\n\nSpecial cases:\n• No mode: if every value appears once\n• Bimodal: two values tie for most frequent\n• Multimodal: more than two peaks\n\nWhen is the mode useful?\n✅ For categorical data (e.g., 'most common tooth extracted')\n✅ When you want to know the 'most popular' or 'most common' value\n\nFun fact: Mode is the only measure of central tendency you can use for non-numerical data! (e.g., 'most common caries location: upper molars') 😄"
  },
  {
    keywords: ["standard deviation", "sd", "spread"],
    answer: "Standard Deviation (SD) tells you how SPREAD OUT your data is around the mean! 📉\n\nFormula: SD = √[Σ(x - x̄)² / n]\n(Don't worry — statistical software calculates this for you!)\n\nWhat it means:\n• Small SD → data is clustered close to the mean\n• Large SD → data is widely spread out\n\nDental example:\nMean plaque score = 2.5\n• SD = 0.3 → most patients score between 2.2–2.8 (consistent!)\n• SD = 1.5 → patients range wildly from 1.0–4.0 (very variable!)\n\nHow to report results: Always write Mean ± SD\nExample: 'The mean pocket depth was 4.2 ± 1.1 mm'\n\nThe 68-95-99.7 rule (for normally distributed data):\n• 68% of data falls within 1 SD of the mean\n• 95% within 2 SDs\n• 99.7% within 3 SDs\n\nSD is your best friend for describing how 'typical' your average is! 🎯"
  },
  {
    keywords: ["correlation"],
    answer: "Correlation measures the relationship between two variables — but remember, it doesn't prove cause! 🔗\n\nThe correlation coefficient (r) ranges from -1 to +1:\n• r = +1 → Perfect positive correlation (both go up together)\n• r = -1 → Perfect negative correlation (one goes up, other goes down)\n• r = 0 → No correlation at all\n\nInterpretation guide:\n• |r| > 0.7 → Strong\n• |r| 0.4–0.7 → Moderate\n• |r| < 0.4 → Weak\n\nDental example:\nr = 0.85 between smoking pack-years and tooth loss → Strong positive correlation!\nThis means as smoking increases, tooth loss increases too. But correlation ≠ causation — both could be influenced by a third factor (like oral hygiene habits).\n\n⚠️ Famous reminder: Ice cream sales and shark attacks are correlated — but eating ice cream doesn't cause shark attacks! (Both increase in summer.) 🍦🦈"
  },
  {
    keywords: ["abstract", "journal article", "original article"],
    answer: "The Abstract is the 'first impression' of your research paper! 📄\n\nFrom Lecture 4, a good abstract:\n• Summarizes: research question, methods, results, and conclusions\n• Length: typically 150-250 words\n• Clear: understandable even for non-experts\n• Free of references: don't cite other studies here\n• Accurate: must reflect the actual content\n\nOriginal article definition (Lecture 3):\n'A type of research paper that presents new, original, unpublished research findings that contribute to the existing body of knowledge.'\n\nPurpose of original articles:\n1. Contribute to advancement of knowledge\n2. Share new findings with the academic community\n3. Stimulate discussion and further research\n\nStructure of a journal article: Title → Authors → Keywords → Abstract → Introduction → Materials & Methods → Results → Discussion → Conclusion → References 📚"
  },
  {
    keywords: ["title"],
    answer: "Writing a great research title is an art! 🎨\n\nFrom Lecture 3, a good title should be:\n• Clear and concise\n• Understandable\n• Informative (gives a clear idea of the study)\n• Specific (avoid vague terms)\n• Attention-grabbing\n• Free from abbreviations\n\nTypes of titles:\n1. Descriptive: 'The Effects of Climate Change on Biodiversity'\n2. Declarative: 'Climate Change is the Greatest Threat to Global Biodiversity'\n3. Interrogative: 'Can We Save the World's Biodiversity?'\n4. Comparative: 'A Comparison of the Effects of X vs. Y'\n\nPro tips:\n✅ Use action verbs like 'investigate', 'analyze', 'compare'\n✅ Include relevant keywords\n✅ Avoid jargon that may confuse readers\n\nDental example: 'Effect of Fluoride Varnish on Caries Incidence in School-Aged Children: A Randomized Controlled Trial' — clear, specific, and informative! 🦷"
  },
  {
    keywords: ["keyword", "keywords"],
    answer: "Keywords are the 'findability' of your research paper! 🔑\n\nDefinition from Lecture 3: 'Words or short phrases that capture the key aspects of your manuscript.'\n\nTwo main purposes:\n1. CATEGORIZING your paper during submission/publication\n2. INDEXING your paper after publication (so others can find it!)\n\nTips for choosing good keywords:\n✅ Follow the journal's guidelines\n✅ Focus on the main topic of your research\n✅ Include techniques and specific methodology\n✅ Avoid single-word keywords (too broad)\n✅ Don't just repeat your title words\n✅ Do keyword research before submitting\n\nExample from Lecture 3:\nBad keywords: 'cardiology, women, MDD' (MDD is an abbreviation!)\nGood keywords: 'depression, coronary disease'\n\nGolden rule: If someone is searching for your topic, what words would they type? Those are your keywords! 🎯"
  },
  {
    keywords: ["materials and methods", "methodology", "methods section"],
    answer: "The Materials & Methods section is where you explain HOW you did your study! 🔬\n\nFrom Lecture 4, it should include:\n1. Materials: equipment, software, reagents used\n2. Methods: how data was collected and analyzed\n3. Study design: experimental or control groups\n4. Sampling strategy: how participants were selected\n5. Data collection methods: surveys, interviews, observations\n6. Data analysis methods: statistical software, techniques used\n\nWriting tips from Lecture 4:\n✅ Use a logical structure — group similar items\n✅ Clear and concise language\n✅ Avoid unnecessary detail\n✅ Proper citations for methods used\n✅ Proofread carefully!\n\nWhy is this section so important? Because it allows OTHER researchers to REPLICATE your study! Reproducibility is a cornerstone of science. 🏛️"
  },
  {
    keywords: ["results section", "results"],
    answer: "The Results section presents your findings — WITHOUT interpreting them! 📊\n\nFrom Lecture 4:\n'Offers objectively your key results, without interpretation, in an orderly and logical sequence using both text and illustrative materials.'\n\nKey characteristics:\n✅ Understandable\n✅ Clear and concise (free of unnecessary detail)\n✅ Well-organized and easy to follow\n✅ Focused on the data collected\n✅ Uses visual aids (tables, figures, graphs)\n✅ Objective — free of bias\n\nComponents:\n1. Description of the data (sample size, population)\n2. Summary statistics (means, medians, SDs)\n3. Data visualizations (tables, figures, graphs)\n4. Results of statistical analyses (t-tests, ANOVA, regression)\n\n⚠️ Important: Results ≠ Discussion! In Results, you report WHAT happened. In Discussion, you explain WHY. Don't mix them! 🎯"
  },
  {
    keywords: ["authorship", "author", "orcid"],
    answer: "Authorship in research is serious business! 📝\n\nFrom Lecture 3, to be listed as an author, you must meet ALL of these criteria:\n✅ Made considerable contributions to design, analysis, interpretation of data, OR creation of new software\n✅ Drafted the work OR revised it critically for important intellectual content\n✅ Approved the version to be published\n✅ Agreed to be answerable for all aspects of the work\n\nIMPORTANT: Adding or deleting authors at the revision stage is generally not permitted without Editor approval!\n\nORCID ID:\n'A unique, persistent identifier free of charge to researchers.' It uniquely identifies you across all your publications, regardless of name variations, and connects your contributions across disciplines, borders, and time.\n\nPro tip: Create your ORCID now — it will follow you throughout your entire research career! 🌐"
  },
  {
    keywords: ["research design", "study design"],
    answer: "Research design is your BLUEPRINT for the entire study! 🏗️\n\nFrom Lecture 5: 'A strategy for answering your research question using empirical data.'\n\nCreating a research design means deciding:\n• Overall research objectives and approach\n• Primary vs. secondary research\n• Sampling methods\n• Data collection methods\n• Procedures for collecting data\n• Data analysis methods\n\nFactors to consider when choosing a design:\n1. Research question: What am I trying to answer?\n2. Study population: Who am I studying?\n3. Data collection methods: What methods will I use?\n4. Resources: Time, money, personnel available?\n5. Ethical considerations: Risks and benefits to participants?\n\nDesign hierarchy for evidence quality:\nRCT > Cohort > Case-control > Cross-sectional > Descriptive\n(Higher = better evidence for causation) 🏆"
  },
  {
    keywords: ["steps of research", "11 steps", "research process", "research steps"],
    answer: "Here are the 11 Scientific Research Steps from Lecture 1! 📋\n\n1️⃣ Getting a Research Idea — critical thinking, reading, observing\n2️⃣ Reviewing the Literature — PubMed, Cochrane, Google Scholar, SCOPUS, etc.\n3️⃣ Planning the Study (Research Design) — write a protocol, select participants & methods\n4️⃣ Piloting the Study — test on a small sample first\n5️⃣ Gaining Ethical Approval — get IRB/Ethics Committee approval\n6️⃣ Study Implementation — execute the study (clinical skills if interventional)\n7️⃣ Data Collection — use tools like REDCap\n8️⃣ Data Entry — MS Excel, Google Sheets, etc.\n9️⃣ Data Analysis — SPSS, R, STATA, SAS, etc.\n🔟 Writing the Manuscript — follow reporting checklists & scientific writing rules\n1️⃣1️⃣ Publication — select the right journal, respond to reviewers\n\nMemory tip: Think of it as a journey from idea to publication — each step builds on the last! 🚀"
  },
  {
    keywords: ["declaration of helsinki", "helsinki", "ethics", "ethical"],
    answer: "The Declaration of Helsinki is the international ethical standard for human research! ⚕️\n\nFrom Lecture 5, its key principles:\n1. Protecting Patient Health\n2. Knowledge Cannot Trample Rights (no experiment justifies harming people)\n3. Additional Considerations\n4. Following Local Regulatory Norms\n5. Consideration of Risks, Burdens, and Benefits\n6. Protection of Vulnerable Groups and Individuals\n7. Focus on Ethics\n8. Protection of Privacy and Confidentiality\n\nFor experimental human studies, researchers must:\n• Get IRB (Institutional Review Board) approval\n• Follow Good Clinical Practice (GCP) guidelines\n• Adhere to Helsinki Declaration principles\n\nBottom line: Science serves people, not the other way around. Every research participant has rights that must be protected! 🛡️"
  },
  {
    keywords: ["validity", "reliable", "reliability"],
    answer: "Validity and Reliability are the pillars of good research quality! 🏛️\n\nVALIDITY — Are you measuring what you THINK you're measuring?\n• Are your instruments accurate?\n• Does your study design actually answer your research question?\n• From Lecture 5: 'Ensure the study design produces valid results.'\n\nRELIABILITY — If you repeat the study, do you get the SAME results?\n• Consistency and reproducibility\n• From Lecture 5: 'Ensure the study design produces reliable results.'\n\nAnalogy:\n🎯 A scale that always shows 5kg more than your actual weight = Reliable (consistent) but NOT valid!\n🎯 A scale that shows different weights each time = Neither reliable nor valid!\n🎯 A scale that consistently shows your exact weight = Both reliable AND valid! ✅\n\nFor dental research: A probe measuring pocket depths should give the same reading each time (reliable) and actually measure what it claims (valid)!"
  },
  {
    keywords: ["irb", "institutional review board", "ethics committee"],
    answer: "The IRB (Institutional Review Board) is your research gatekeeper! 🏛️\n\nFrom Lecture 1: You need 'Ability to comply with guidelines of your institution Ethics Committee or Institutional Review Board (IRB)' before conducting research.\n\nWhat the IRB does:\n• Reviews research proposals involving human subjects\n• Ensures participant safety and rights are protected\n• Approves, requires modifications, or rejects studies\n• Monitors ongoing research\n\nWhen do you need IRB approval?\n✅ Any study involving human participants\n✅ Studies involving patient data or records\n✅ Studies involving identifiable biological specimens\n\nKey principle: You CANNOT start data collection without IRB approval. This is non-negotiable in ethical research!\n\nFor Hashemite University students: Check with your faculty's research committee for the approval process. 🎓"
  },
  {
    keywords: ["sample", "sampling", "population"],
    answer: "Understanding samples and populations is fundamental to research! 🎯\n\nKEY DEFINITIONS:\n\nPOPULATION: The entire group you want to draw conclusions about\n→ Example: All dental patients in Jordan with periodontal disease\n\nSAMPLE: The subset of the population you actually study\n→ Example: 200 dental patients selected from 3 clinics in Amman\n\nWhy sample? Because studying an entire population is usually impossible (too large, too expensive, too time-consuming)!\n\nGood sampling should be:\n✅ Representative of the population\n✅ Large enough to detect differences (statistical power)\n✅ Randomly selected when possible\n\nFrom Lecture 1 (Research Steps 3): 'Selection of participants, data collection methods, and data analysis techniques' is part of study planning.\n\nBias warning: If your sample isn't representative, your conclusions may not apply to the whole population! ⚠️"
  },
  {
    keywords: ["bias"],
    answer: "Bias is the enemy of good research — and it can sneak in everywhere! 🎭\n\nBias is any systematic error that leads to an incorrect estimate of the true effect.\n\nCommon types:\n\n🔹 Selection Bias: When the way you select participants distorts results\n→ Example: Only studying patients who come to private clinics misses lower-income patients\n\n🔹 Information Bias: Errors in how data is collected or recorded\n→ Example: Patients underreporting their smoking habits\n\n🔹 Recall Bias: Participants remember past events differently\n→ Especially a problem in case-control studies\n\n🔹 Observer Bias: The researcher's expectations influence their measurements\n→ Solution: Blinding! The researcher doesn't know which group the participant is in\n\nHow to reduce bias:\n• Randomization (in RCTs)\n• Blinding (single or double)\n• Using validated instruments\n• Training data collectors properly\n• Large, representative samples\n\nRemember: You can't eliminate all bias, but you must acknowledge and minimize it! 🛡️"
  },
  {
    keywords: ["literature review", "literature search", "review"],
    answer: "The literature review is Step 2 of the research process — and it's CRUCIAL! 📚\n\nWhy do we review literature?\n• To understand what's already known\n• To identify gaps in knowledge\n• To formulate your research question\n• To justify why your study is needed\n• To choose the right methodology\n\nFrom Lecture 1: You need 'Ability to search Medical Electronic databases (PubMed, Cochrane, Google Scholar, EBSCO, EMBASE, SCOPUS, Web of Knowledge, etc.)'\n\nTips for effective literature searches:\n✅ Use multiple databases\n✅ Use MeSH terms and controlled vocabulary\n✅ Combine keywords with AND/OR/NOT operators\n✅ Set date limits and language filters\n✅ Keep track of all your searches\n✅ Use reference management software (Zotero, Mendeley, EndNote)\n\nDental research tip: Always check Cochrane first for systematic reviews, then PubMed for primary studies! 🦷"
  },
  {
    keywords: ["spss", "stata", "software", "statistics software", "data analysis software"],
    answer: "Statistical software tools for data analysis — a must for researchers! 💻\n\nFrom Lecture 1, Step 9: 'Ability to run statistical tests on statistics software e.g. SPSS, R, STATA, SAS, etc.'\n\nPopular options:\n\n📊 SPSS (Statistical Package for Social Sciences)\n• Most commonly used in health research\n• User-friendly interface\n• Great for beginners\n• Used widely in dental and medical research\n\n📈 R\n• Free and open-source!\n• Most powerful and flexible\n• Steep learning curve but worth it\n• Can create beautiful graphs\n\n📉 STATA\n• Popular in epidemiology and clinical research\n• Strong for longitudinal data\n\n📋 SAS\n• Industry standard in pharmaceutical research\n• Very powerful but expensive\n\nFor dental students starting out: Learn SPSS first — it's the most used in your field and the most beginner-friendly! 🎓"
  },
  {
    keywords: ["variable", "independent variable", "dependent variable"],
    answer: "Variables are the building blocks of any research study! 🧱\n\nA VARIABLE is any characteristic or attribute that can take on different values.\n\nTwo key types:\n\n🔵 INDEPENDENT VARIABLE (IV):\n• The variable you MANIPULATE or control\n• The 'cause' in a cause-effect relationship\n• Example: Amount of fluoride in drinking water\n\n🔴 DEPENDENT VARIABLE (DV):\n• The variable you MEASURE\n• The 'effect' or outcome\n• Example: Rate of dental caries\n\nOther types:\n• Confounding variable: A third variable that affects both IV and DV\n• Control variable: Kept constant to eliminate its effect\n\nFrom Lecture 4 (Hypothesis): 'A hypothesis is a statement of predicted relationship between the INDEPENDENT and DEPENDENT variables under investigation.'\n\nDental example:\nIV: Brushing frequency (1x vs. 2x daily)\nDV: Plaque score after 1 month\nHypothesis: 'Patients who brush twice daily will have lower plaque scores.' 🦷"
  },
  {
    keywords: ["publisher", "elsevier", "springer", "journal"],
    answer: "Understanding publishers vs. databases is important for finding literature! 📰\n\nFrom Lecture 2:\n• PUBLISHER: 'An organization that publishes books, magazines, or newspapers'\n• DATABASE: 'An online tool comprised of many journals that often focus on a broad area'\n\nFamous Scientific Publishers:\n• Elsevier (publishes The Lancet, Journal of Dentistry, and hundreds more)\n• Springer\n• Cambridge University Press\n• John Wiley & Sons\n• Blackwell Publishing\n• SAGE Publishing\n• Taylor & Francis\n• MDPI (open access)\n• Nature\n\nImportant distinction: A publisher CREATES the journals. A database INDEXES them.\n\nFor example: The Journal of Dentistry is PUBLISHED by Elsevier, but you can find it INDEXED in PubMed, Scopus, and Web of Science.\n\nWhen choosing where to publish: Look for journals indexed in PubMed or Scopus for maximum visibility! 🌍"
  },
  {
    keywords: ["what to study", "study tips", "exam", "how to pass", "prepare"],
    answer: "Here are my top tips for acing your Biostatistics & Research exam! 🎓\n\n📌 MUST-KNOW TOPICS:\n1. Study designs: RCT, cohort, case-control, cross-sectional — know their definitions, uses, and limitations!\n2. Types of research: quantitative, qualitative, mixed, basic, applied\n3. Hypothesis types: simple/complex, directional/non-directional, null vs. research\n4. The 11 research steps — memorize them in order!\n5. Key terms: p-value, SD, mean, median, mode\n6. Database differences: PubMed vs. Scopus vs. Google Scholar\n7. Journal article structure: Abstract, Title, Methods, Results, Discussion\n\n🔑 SMART STUDY TIPS:\n• Use the quiz section to test yourself!\n• Use the glossary to check definitions\n• Draw a table comparing study designs\n• Draw the 11-step research process as a flowchart\n\nYou've got this! 💪 The content is logical — once you see the big picture, everything connects!"
  },
  {
    keywords: ["evidence based", "evidence-based", "ebd", "ebm"],
    answer: "Evidence-Based Dentistry (EBD) is the core reason you're learning research! 🏥\n\nDefinition: Using the best available evidence, combined with clinical expertise and patient values, to make clinical decisions.\n\nThe 3 pillars of EBD:\n1. Best Research Evidence (what the studies show)\n2. Clinical Expertise (your skills and experience)\n3. Patient Values and Preferences (what the patient wants)\n\nEvidence hierarchy (best to least):\n1. Systematic Reviews & Meta-analyses (Cochrane!)\n2. RCTs\n3. Cohort Studies\n4. Case-Control Studies\n5. Cross-Sectional Studies\n6. Case Reports & Expert Opinion\n\nWhy it matters for dental students: Every treatment decision you make should ideally be backed by evidence. 'My professor taught me this' isn't enough — what does the research say? 🔬\n\nThis is exactly why Dr. Lama's course exists — to make you evidence-literate practitioners! 🦷"
  },
];

