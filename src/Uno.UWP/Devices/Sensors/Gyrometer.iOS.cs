#nullable enable

using CoreMotion;
using Foundation;
using Uno.Devices.Sensors.Helpers;

namespace Windows.Devices.Sensors
{
	public partial class Gyrometer
	{
		private CMMotionManager? _motionManager;

		private uint _reportInterval;
		public uint ReportInterval
		{
			get
			{
				if (_motionManager != null)
				{
					return (uint)_motionManager.GyroUpdateInterval * 1000;
				}

				return _reportInterval;
			}
			set
			{
				_reportInterval = value;
				if (_motionManager != null)
				{
					_motionManager.GyroUpdateInterval = value / 1000.0;
				}
			}
		}

		private static Gyrometer? TryCreateInstance()
		{
			var motionManager = new CMMotionManager();
			return !motionManager.GyroAvailable ?
				null :
				new Gyrometer();
		}

		private void StartReading()
		{
			_motionManager ??= new();

			_motionManager.GyroUpdateInterval = _reportInterval / 1000.0;
			_motionManager.StartGyroUpdates(new NSOperationQueue(), GyrometerUpdateReceived);
		}

		private void StopReading()
		{
			if (_motionManager == null)
			{
				return;
			}

			_motionManager.StopGyroUpdates();
			_motionManager.Dispose();
			_motionManager = null;
		}

		private void GyrometerUpdateReceived(CMGyroData data, NSError error)
		{
			if (data == null)
			{
				return;
			}

			var gyrometerReading = new GyrometerReading(
				(float)data.RotationRate.x * SensorConstants.RadToDeg,
				(float)data.RotationRate.y * SensorConstants.RadToDeg,
				(float)data.RotationRate.z * SensorConstants.RadToDeg,
				SensorHelpers.TimestampToDateTimeOffset(data.Timestamp));

			OnReadingChanged(gyrometerReading);
		}
	}
}
