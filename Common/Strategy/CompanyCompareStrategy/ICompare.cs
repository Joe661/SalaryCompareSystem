﻿using Common.Model;
using Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Strategy.CompanyCompareStrategy
{
    public interface ICompanyCompare
    {
        ChartModel CompanyCompare(List<CompanyDetails> Ids, List<CompanyInfo> infos);
    }
}
