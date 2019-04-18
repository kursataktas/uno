﻿using Windows.UI.Core;
using Uno.UI.Samples.UITests.Helpers;
using System;

namespace SamplesApp.UITests.Windows_UI_Xaml_Controls.Models
{
	public class DateTimePickerViewModel : ViewModelBase
	{
		public DateTimePickerViewModel(CoreDispatcher dispatcher) : base(dispatcher)
		{
			_date = DateTimeOffset.Now.Date;
			_time = DateTimeOffset.Now.TimeOfDay;
		}

		private DateTimeOffset _date;

		public DateTimeOffset Date
		{
			get { return _date; }
			set
			{
				_date = value;
				RaisePropertyChanged();
			}
		}

		private TimeSpan _time;

		public TimeSpan Time
		{
			get { return _time; }
			set
			{
				_time = value;
				RaisePropertyChanged();
			}
		}
	}
}
