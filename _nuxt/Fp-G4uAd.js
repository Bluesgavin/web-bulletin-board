import{d as c,r as d,v as a,x as e,L as p,M as u,B as m,t as l,y as n}from"./Bt4xb80Q.js";const b={class:"mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"},g={class:"flex flex-col items-center"},x=e("div",{class:"mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16"},[e("h2",{class:"text-3xl font-semibold capitalize md:text-5xl"},[m("The latest and greatest "),e("span",{class:"bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center px-4 text-white"},"news")]),e("p",{class:"mx-auto mt-4 max-w-[528px] text-[#636262]"},"Lorem ipsum dolor sit amet elit ut aliquam")],-1),f={class:"mb-6 grid grid-cols-1 justify-items-center gap-8 sm:justify-items-stretch md:mb-10 md:grid-cols-3 md:gap-4 lg:mb-12"},h=["src"],_={class:"w-full pt-4"},y={class:"mb-4 text-xs font-semibold uppercase text-[#636262]"},k={class:"mb-4 text-xl font-semibold"},v={class:"mb-5 font-normal text-[#636262] lg:mb-8"},C={class:"mx-auto flex max-w-[480px] flex-row items-center text-left"},w=e("img",{src:"https://assets.website-files.com/63904f663019b0d8edf8d57c/63905435069fb009d43abbb1_Ellipse-2.jpg",alt:"",class:"mr-4 inline-block h-16 w-16 rounded-full object-cover"},null,-1),$={class:"flex flex-col items-start"},S={class:"text-base font-semibold"},D={class:"flex items-start max-[991px]:flex-col lg:items-center"},B={class:"text-sm text-[#636262]"},L=e("a",{href:"#",class:"inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]"},"View More Articles",-1),T=e("img",{src:"https://assets.website-files.com/63904f663019b0d8edf8d57c/639832e3e7aba393eeeba215_plain6.svg",alt:"",class:"absolute bottom-auto left-0 right-auto top-0 inline-block sm:bottom-auto sm:left-4 sm:right-auto sm:top-8 md:left-20 md:top-16"},null,-1),q=c({__name:"index",setup(A){const i=d([{subtitle:1,title:2,date:3,bg:"",location:"",expectedCommitHours:""}]);return fetch("https://api.v2.socialcareer.org/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Locale:"zhHant"},body:JSON.stringify({query:`
    query jobs($skip: Int, $pageSize: Int, $searchText: String, $filter: JobsFilter, $includePast: Boolean, $publicOnly: Boolean, $sort: String, $bookmarkSortByLast: Boolean) {
  jobs(
    params: {skip: $skip, pageSize: $pageSize, searchText: $searchText, filter: $filter, includePast: $includePast, publicOnly: $publicOnly, sort: $sort, bookmarkSortByLast: $bookmarkSortByLast}
  ) {
    data {
      id
      ngoId
      ngo {
        name
        category
        logoUrl
      }
      title
      ownerCenter {
        name
      }
      sdgs
      causes
      recipients
      prerequisite {
        minAge
        maxAge
      }
      expectedCommitHours
      description
      remarks
      imageUrls
      volunteerFunctions
      skills
      languages
      languageOther
      parentalConsent
      pcAge
      quota
      remainingQuota
      acceptedQuota
      groupApply
      feeDetail
      applicationStart
      applicationEnd
      additionalQuestions {
        key
        desc
        type
        mandatory
        options {
          key
          desc
        }
      }
      contact
      contactEmail
      contactPhone
      pendingApplications
      acceptedApplications
      progress
      overallStart
      overallEnd
      sessions {
        id
        type
        title
        frequency
        position
        attendanceRule
        attendanceRuleAmount
        timeslots {
          id
          isSingleDay
          isDateTBC
          startDate
          endDate
          isAllDay
          isTimeTBC
          startTime
          endTime
          isVirtual
          address {
            en
            zhHans
            zhHant
          }
          addressLine
          mapLatLong
          recurrenceType
          recurrenceFrequency
          recurrenceWeekdays
          recurrenceMonthlyMode
          recurrenceRepeatDayOfMonth
          recurrenceRepeatWeek
          recurrenceRepeatDayOfWeek
          recurrenceExceptionDates
          regionCode
          districtCode
          subDistrictCode
          quota
          usedQuota
          pendingQuota
          remainingQuota
        }
      }
      isVirtual
      regionCode
      districtCode
      subDistrictCode
      location
      jobLink
      createdAt
      updatedAt
      applicationRestrictions
      inviteMembers
    }
    total
  }
}
    `,variables:{filter:{dayOfWeekOptions:null,regionCodes:null,districtCodes:null,subDistrictCodes:null,isVirtual:null,isEditorChoice:null,isNgoDetailsJobEventListFilter:null,isBookmarkList:null,restrictions:null,causes:null,recipients:null,sdgoals:null,volunteerFunctions:null,ageOption:null,ageRange:{start:0,end:100},languages:null,ngoId:null,centerId:null,expectedCommitHoursRange:{start:0,end:100}},skip:0,searchText:"",pageSize:12,includePast:!1,publicOnly:!0,sort:"-publishDate",bookmarkSortByLast:null},operationName:"jobs"})}).then(s=>s.json()).then(s=>{const r=s.data.jobs.data;i.value=r.map(t=>{const o=t.imageUrls[0];return{subtitle:t.ngo.name,title:t.title,date:`${t.overallStart}-${t.overallEnd}}`,bg:o,location:t.location,expectedCommitHours:t.expectedCommitHours}})}),(s,r)=>(l(),a("div",null,[e("section",null,[e("div",b,[e("div",g,[x,e("div",f,[(l(!0),a(p,null,u(i.value,(t,o)=>(l(),a("a",{href:"#",key:o,class:"flex flex-col gap-4 rounded-2xl border border-solid border-[#b1b1b1] bg-[#f5f8ff] p-6 font-bold text-black transition hover:[box-shadow:rgb(0,_0,_0)_7px_7px]"},[e("img",{src:t.bg,alt:"",class:"inline-block h-60 w-full object-cover"},null,8,h),e("div",_,[e("p",y,n(t.subtitle),1),e("p",k,n(t.title),1),e("p",v,n(t.date),1),e("div",C,[w,e("div",$,[e("h6",S,n(t.location),1),e("div",D,[e("p",B,n(t.expectedCommitHours),1)])])])])]))),128))]),L])]),T])]))}});export{q as default};
